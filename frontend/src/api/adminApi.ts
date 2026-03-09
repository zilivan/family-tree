// src/api/adminApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person, User as AdminUser } from "../types/index";
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
  createdAt: string;
}

export interface EditPerson extends Person {
  creator: { email: string } | null;
}

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["PendingPersons", "EditPersons", "GetUsers"],

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

    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetUsers"],
    }),
  }),
});

export const {
  useGetPendingPersonsQuery,
  useConfirmPersonMutation,
  useApplyPersonChangesMutation,
  useGetUsersQuery,
  useGetEditPersonsQuery,
  useRejectPersonChangesMutation,
  useToggleUserBlockMutation,
  useToggleUserAdminMutation,
  useDeleteUserMutation,
} = adminApi;
