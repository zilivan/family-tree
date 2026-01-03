// src/api/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
  email: string;
}

interface VerifyCodeRequest {
  email: string;
  code: string;
}

interface AuthResponse {
  token: string;
  user: { id: string; email: string; isAdmin: boolean };
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    requestCode: builder.mutation<void, LoginRequest>({
      query: (body) => ({
        url: '/auth/request-code',
        method: 'POST',
        body,
      }),
    }),
    verifyCode: builder.mutation<AuthResponse, VerifyCodeRequest>({
      query: (body) => ({
        url: '/auth/verify-code',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRequestCodeMutation, useVerifyCodeMutation } = authApi;