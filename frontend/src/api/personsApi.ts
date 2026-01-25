import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person } from '../types/index'

export interface FamilyResponse {
  currentPerson: Person;
  husband: Person | null;
  wife: Person | null;
  branch: string;
  otherPartnersHusband: Person[]; // ← добавьте, если используете
  otherPartnersWife: Person[];    
}
export interface CreatePersonInput {
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate?: string | null; // ISO string, например: "1990-01-15T00:00:00.000Z"
  deathDate?: string | null;
  gender?: 'male' | 'female' |  null | undefined;
  phone?: string | null;
  fatherId?: string | null;
    motherId?: string | null;
    photos?: string[];
   spouseIds?: string [];
}
export interface SearchPersonResult {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate: string | null;
}


export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({

    getPerson: builder.query<Person, { id: string; branch?: string }>({
  query: ({ id, branch = 'base' }) => {
    const params = new URLSearchParams();
    if (branch) params.append('branch', branch);
    return `/persons/${id}?${params.toString()}`;
  },
}),

getFamily: builder.query<FamilyResponse, { personId: string; branch?: string }>({
  query: ({ personId, branch = 'base' }) => `/persons/${personId}/family?branch=${branch}`,
}),

  createPerson: builder.mutation<Person,CreatePersonInput >({
      query: (newPersonData) => ({
        url: '/persons',
        method: 'POST',
        body: newPersonData,
      }),
      // Опционально: автоматически обновлять кэш после создания
      // invalidatesTags: ['Persons'],
    }),
    uploadPerson: builder.mutation<Person ,{ id: string, data:CreatePersonInput } >({
      query: ( {id, data}) => ({
        url: `/persons/${id}`,
        method: 'PUT',
        body: data,
      }),
      // Опционально: автоматически обновлять кэш после создания
       //invalidatesTags: ['Persons'],
    }),


searchPersons: builder.query<SearchPersonResult[], { query: string; branch: string; selectGender:string; }>({
  query: ({ query, branch, selectGender }) => `/persons/search?q=${encodeURIComponent(query)}&branch=${branch}&selectGender=${selectGender}`,
}),

getPersonsFullName: builder.query<SearchPersonResult[], { ids: string[]; branch: string }>({
  
  query: ({ ids, branch }) => {

    const params = new URLSearchParams();
ids.forEach(id => params.append('ids', id.toString()));
 if (branch) params.append('branch', branch);
   return  `/persons/fullname/?${params.toString()}`;
  },

}),

    uploadPhoto: builder.mutation<
      { photoUrl: string },
      { personId: string; formData: FormData }
    >({
      query: ({ personId, formData }) => ({
        url: `/persons/${personId}/photos`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetPersonQuery, useGetFamilyQuery, useUploadPhotoMutation,useCreatePersonMutation,useSearchPersonsQuery,useUploadPersonMutation,useGetPersonsFullNameQuery } =
  personsApi;
