import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const UserApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.tvmaze.com/search/shows?q=all" }),
    tagTypes: ["invalidate"],
    endpoints: (builder) => {
        return {
            getShowNames: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["invalidate"]
            }),

            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/apiEndPoint",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["invalidate"]
            }),

        }
    }
})

export const { useGetShowNamesQuery, useAddUserMutation } = UserApi
