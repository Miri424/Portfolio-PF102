import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://products-crud-json-server.onrender.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productApi;
