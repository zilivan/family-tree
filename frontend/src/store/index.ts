import { configureStore } from "@reduxjs/toolkit";
import { personsApi } from "../api/personsApi";

export const store = configureStore({
  reducer: {
    [personsApi.reducerPath]: personsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
