import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://tiles-backend-production.up.railway.app/" }),
  tagTypes: ["Product"], // Use an object for baseUrl
  endpoints: (builder) => ({
    getFilterProduct: builder.query({
      query: (options) =>
        `product?page=${options.page}&type=${options.type.toLowerCase()}&search=${options.search}`,
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.products.map(({ id }) => ({ type: "Product" })),
      ],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "admin/login",
        method: "POST",
        body: data,
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/admin/create",
        method: "POST",
        body: data,
        headers: {
          token: localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: "/product/admin/delete",
        method: "DELETE",
        body: data,
        headers: {
          token: localStorage.getItem("token"),
        },
      }),
      invalidatesTags:['Product'],
    }),
  }),
});

export const {
  useGetFilterProductQuery,
  useLoginMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productSlice;
