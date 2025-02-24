import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import basketSliceReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    basket: basketSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
