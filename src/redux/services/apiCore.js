import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiCore = createApi({
    reducerPath: 'apiCore',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['post'],
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            }),
            providesTags: ["post"]
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: 'posts',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['post']
        })
    })
})
export const {
    useGetAllPostQuery,
    useCreatePostMutation,
} = apiCore