// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { personsApi } from '../api/personsApi';
import { photosApi } from '../api/photosApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [personsApi.reducerPath]: personsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(personsApi.middleware)
      .concat(photosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;