import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person, Photo } from "../types/index";
import { API_BASE_URL } from "../lib/apiConfig";

export interface FamilyResponse {
  currentPerson: Person;
  branch: string;
  marriagesAsHusband: Person[];
  marriagesAsWife: Person[];
  childrenAsFather: Person[];
  childrenAsMother: Person[];
  spouses: Person[];
  photos: Photo[];
}
export interface CreatePersonInput {
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate?: string | null; // ISO string, например: "1990-01-15T00:00:00.000Z"
  deathDate?: string | null;
  gender?: string | null;
  phone?: string | null;
  fatherId?: string | null;
  motherId?: string | null;
  photos?: string[];
  spouseIds?: string[] | null;
}
export interface SearchPersonResult {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate: string | null;
}
interface UploadPhotoResponse {
  message: string;
  photoUrl: string;
}

export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Persons", "Family"],
  endpoints: (builder) => ({
    getPerson: builder.query<Person, { id: string; branch?: string }>({
      query: ({ id, branch = "base" }) => {
        const params = new URLSearchParams();
        if (branch) params.append("branch", branch);
        return `/persons/${id}?${params.toString()}`;
      },
      providesTags: ["Persons"],
    }),

    getFamily: builder.query<
      FamilyResponse,
      { personId: string; branch?: string }
    >({
      query: ({ personId, branch = "base" }) =>
        `/persons/${personId}/family?branch=${branch}`,
      providesTags: ["Family"],
    }),

    getFamilyTreeData: builder.query({
      query: () => "/persons/family-tree",
    }),

    createPerson: builder.mutation<Person, CreatePersonInput>({
      query: (newPersonData) => ({
        url: "/persons",
        method: "POST",
        body: newPersonData,
      }),

      invalidatesTags: ["Persons"],
    }),
    uploadPerson: builder.mutation<
      Person,
      { id: string; data: CreatePersonInput }
    >({
      query: ({ id, data }) => ({
        url: `/persons/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["Persons"],
    }),

    searchPersons: builder.query<
      SearchPersonResult[],
      { query: string; branch: string; selectGender: string | null }
    >({
      query: ({ query, branch, selectGender }) =>
        `/persons/search?q=${encodeURIComponent(query)}&branch=${branch}&selectGender=${selectGender}`,
    }),

    getPersonsFullName: builder.query<
      SearchPersonResult[],
      { ids: string[]; branch: string }
    >({
      query: ({ ids, branch }) => {
        const params = new URLSearchParams();
        ids.forEach((id) => params.append("ids", id.toString()));
        return `/persons/fullname/?${params.toString()}&branch=${branch}`;
      },
    }),

    updatePersonLock: builder.mutation<
      void,
      { personId: string; isLocked: boolean }
    >({
      query: ({ personId, isLocked }) => ({
        url: `/persons/${personId}/lock`,
        method: "PATCH",
        body: { isLocked },
      }),
      invalidatesTags: ["Persons"],
    }),
    deletePerson: builder.mutation<void, string>({
      query: (personId) => ({
        url: `/persons/${personId}`,
        method: "DELETE",
      }),

      //invalidatesTags: ['Persons']
    }),

    uploadPhoto: builder.mutation<
      UploadPhotoResponse,
      { id: string; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/persons/${id}/photos`,
        method: "POST",
        body: formData,
      }),
    }),
    restorePhoto: builder.mutation<
      { success: true; message: string },
      { personId: string; photoId: string }
    >({
      query: ({ personId, photoId }) => ({
        url: `/persons/${personId}/photos/${photoId}/restore`,
        method: "POST",
      }),

      invalidatesTags: ["Persons"],
    }),

    deletePhoto: builder.mutation<void, { personId: string; photoId: string }>({
      query: ({ personId, photoId }) => ({
        url: `/persons/${personId}/photos/${photoId}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Persons"],
    }),
  }),
});

export const {
  useGetPersonQuery,
  useGetFamilyQuery,
  useGetFamilyTreeDataQuery,
  useUploadPhotoMutation,
  useCreatePersonMutation,
  useSearchPersonsQuery,
  useUploadPersonMutation,
  useGetPersonsFullNameQuery,
  useDeletePhotoMutation,
  useRestorePhotoMutation,
  useUpdatePersonLockMutation,
  useDeletePersonMutation,
} = personsApi;
