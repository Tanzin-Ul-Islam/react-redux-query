import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiCore = createApi({
    reducerPath: 'apiCore',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        })
    })
})
export const {
    useGetAllPostQuery,
} = apiCore