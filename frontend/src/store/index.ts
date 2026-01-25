
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { personsApi } from '../api/personsApi';
import { photosApi } from '../api/photosApi';
import { adminApi } from '../api/adminApi'; // ← ДОБАВИЛИ ИМПОРТ

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [personsApi.reducerPath]: personsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer, // ← ДОБАВИЛИ РЕДЬЮСЕР
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(personsApi.middleware)
      .concat(photosApi.middleware)
      .concat(adminApi.middleware), // ← ДОБАВИЛИ MIDDLEWARE
});





