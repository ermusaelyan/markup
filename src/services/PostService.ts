import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from "../models/IPost";

// Define the PostApi
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cloud.codesupply.co/endpoint/react/',
    }),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], void>({
            query: () => ({
                url: '/data.json',
            }),
        }),
    }),
});

