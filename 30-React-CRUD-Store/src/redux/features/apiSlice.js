import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../services/API/productApi";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Products', id }],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useDeleteProductMutation } = apiSlice;
