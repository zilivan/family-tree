// src/api/adminApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {Person} from "../types/index"

export interface PendingPerson {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate: string;
  status: 'PENDING' | 'CONFIRMED';
  pendingRegistration: {
    email: string;
  } | null;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
  createdAt: string;
  person: {
    firstName: string;
    lastName: string;
    birthDate: string;
  } | null;
}
export interface EditPerson extends Person {
  creator: { email: string } | null;
}

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
tagTypes: ['PendingPersons'],

  endpoints: (builder) => ({

    getPendingPersons: builder.query<PendingPerson[], void>({
      query: () => '/admin/pending-persons',
      providesTags: ['PendingPersons'],
    }),
getEditPersons: builder.query<EditPerson[], void>({
  query: () => '/admin/edit-persons',
  //providesTags: ['EditPersons'],
}),

applyPersonChanges: builder.mutation<void, string>({
  query: (personId) => ({
    url: `/admin/apply-person/${personId}`,
    method: 'POST',
  }),
  // Инвалидируем семью после применения
  //invalidatesTags: ['Family'],
}),
// Новый мутация: отклонить изменения
rejectPersonChanges: builder.mutation<void, string>({
  query: (personId) => ({
    url: `/admin/reject-person/${personId}`,
    method: 'DELETE',
  }),
 // invalidatesTags: ['EditPersons'],
}),


    confirmPerson: builder.mutation<void, string>({
      query: (personId) => ({
        url: `/admin/confirm-person/${personId}`,
        method: 'POST',
      }),
      // Авто-обновление списка после подтверждения
      invalidatesTags: ['PendingPersons'],
    }),
    getUsers: builder.query<AdminUser[], void>({
      query: () => '/admin/users',
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
} = adminApi;