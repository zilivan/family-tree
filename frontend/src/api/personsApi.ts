import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
  deathDate: string | null;
  gender: "male" | "female" | "other" | null;
  phone: string | null;
  parentId: string | null;
  userId: string | null;
  branch: string;
  photos: { id: string; url: string }[];
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
    getPerson: builder.query<Person, string>({
      query: (id) => `/persons/${id}`,
    }),
    getFamily: builder.query<any, { personId: string; branch?: string }>({
      query: ({ personId, branch = "base" }) =>
        `/persons/${personId}/family?branch=${branch}`,
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

export const { useGetPersonQuery, useGetFamilyQuery, useUploadPhotoMutation } =
  personsApi;
