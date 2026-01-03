import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*interface UploadPhotoResponse {
  message: string;
  photoUrl: string;
}*/

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery,
  endpoints: (builder) => ({
    uploadPhotoFile: builder.mutation<{ photoUrl: string }, FormData>({
      query: (formData) => ({
        url: "/upload-photo",
        method: "POST",
        body: formData,
      }),
    }),
    linkPhotoToPerson: builder.mutation<
      void,
      { personId: string; photoUrl: string }
    >({
      query: ({ personId, photoUrl }) => ({
        url: `/persons/${personId}/link-photo`,
        method: "POST",
        body: { photoUrl },
      }),
    }),
    deletePhoto: builder.mutation<void, string>({
      query: (photoId) => ({
        url: `/photos/${photoId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUploadPhotoFileMutation,
  useLinkPhotoToPersonMutation,
  useDeletePhotoMutation,
} = photosApi;
