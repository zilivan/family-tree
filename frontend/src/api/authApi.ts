// src/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../types/index";
import { API_BASE_URL } from "../lib/apiConfig";
interface LoginRequest {
  email: string;
}
interface LogResponse {
  message: string;
  personId: string | null;
}
interface VerifyCodeRequest {
  email: string;
  code: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api` }),

  endpoints: (builder) => ({
    requestCode: builder.mutation<LogResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/request-code",
        method: "POST",
        body,
      }),
    }),

    anonymCode: builder.mutation<AuthResponse, { code: string }>({
      query: (body) => ({
        url: "/auth/anonymous",
        method: "POST",
        body,
      }),
    }),

    sendAdminCode: builder.mutation<AuthResponse, { code: string }>({
      query: (body) => ({
        url: "/auth/admin-pass",
        method: "POST",
        body,
      }),
    }),

    verifyCode: builder.mutation<AuthResponse, VerifyCodeRequest>({
      query: (body) => ({
        url: "/auth/verify-code",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRequestCodeMutation,
  useVerifyCodeMutation,
  useAnonymCodeMutation,
  useSendAdminCodeMutation,
} = authApi;
