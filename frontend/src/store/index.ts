// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { personsApi } from "../api/personsApi";
import { adminApi } from "../api/adminApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [personsApi.reducerPath]: personsApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(personsApi.middleware)
      .concat(adminApi.middleware),
});
