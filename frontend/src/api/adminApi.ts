// src/api/adminApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Person,
  DeletePersonResponse,
  User as AdminUser,
} from "../types/index";
import { API_BASE_URL } from "../lib/apiConfig";

export interface PendingPerson {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate: string;
  status: "PENDING" | "CONFIRMED";
  pendingRegistration: {
    email: string;
  } | null;
  createdAt: string | null;
}

export interface EditPerson extends Person {
  creator: { email: string } | null;
}
export interface CodeGenerated {
  success: boolean;
  active: boolean;
  code: number | null;
  expiresAt: Date | null;
  durationDays: number | null;
  timeLeft: Date | null;
  message: string;
}

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["PendingPersons", "EditPersons", "GetUsers", "CodeStatus"],

  endpoints: (builder) => ({
    getPendingPersons: builder.query<PendingPerson[], void>({
      query: () => "/admin/pending-persons",
      providesTags: ["PendingPersons"],
    }),
    getEditPersons: builder.query<EditPerson[], void>({
      query: () => "/admin/edit-persons",
      providesTags: ["EditPersons"],
    }),
    getUsers: builder.query<AdminUser[], void>({
      query: () => "/admin/users",
      providesTags: ["GetUsers"],
    }),
    getStatusCode: builder.query<CodeGenerated, void>({
      query: () => "/admin/code/status",
      providesTags: ["CodeStatus"],
    }),

    applyPersonChanges: builder.mutation<void, string>({
      query: (personId) => ({
        url: `/admin/apply-person/${personId}`,
        method: "POST",
      }),
      // Инвалидируем семью после применения
      invalidatesTags: ["EditPersons", "PendingPersons"],
    }),
    // Новый мутация: отклонить изменения
    rejectPersonChanges: builder.mutation<void, string>({
      query: (personId) => ({
        url: `/admin/reject-person/${personId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EditPersons", "PendingPersons"],
    }),

    confirmPerson: builder.mutation<void, string>({
      query: (personId) => ({
        url: `/admin/confirm-person/${personId}`,
        method: "POST",
      }),
      // Авто-обновление списка после подтверждения
      invalidatesTags: ["PendingPersons"],
    }),

    toggleUserBlock: builder.mutation<
      void,
      { userId: string; isBlocked: boolean }
    >({
      query: ({ userId, isBlocked }) => ({
        url: `/admin/users/${userId}/block`,
        method: "PATCH",
        body: { isBlocked },
      }),
      invalidatesTags: ["GetUsers", "PendingPersons", "EditPersons"],
    }),

    toggleUserAdmin: builder.mutation<
      void,
      { userId: string; isAdmin: boolean }
    >({
      query: ({ userId, isAdmin }) => ({
        url: `/admin/users/${userId}/admin`,
        method: "PATCH",
        body: { isAdmin },
      }),
      invalidatesTags: ["GetUsers", "PendingPersons", "EditPersons"],
    }),

    deleteUser: builder.mutation<DeletePersonResponse, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetUsers"],
    }),

    generateCode: builder.mutation<CodeGenerated, number>({
      query: (durationDays) => ({
        url: `/admin/code/generate`,
        method: "POST",
        body: { durationDays },
      }),
      invalidatesTags: ["CodeStatus"],
    }),
    deleteCode: builder.mutation<
      { success: boolean; message: string },
      undefined
    >({
      query: () => ({
        url: `/admin/code/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["CodeStatus"],
    }),
  }),
});

export const {
  useGetPendingPersonsQuery,
  useConfirmPersonMutation,
  useApplyPersonChangesMutation,
  useGetUsersQuery,
  useGetEditPersonsQuery,
  useGetStatusCodeQuery,
  useRejectPersonChangesMutation,
  useToggleUserBlockMutation,
  useToggleUserAdminMutation,
  useDeleteUserMutation,
  useDeleteCodeMutation,
  useGenerateCodeMutation,
} = adminApi;
