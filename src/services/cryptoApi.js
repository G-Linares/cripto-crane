import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '5f26640885msha7c0a98cf0c210cp14c8e2jsnfd82381f8109'
}

// tengo que usar la key de version 2 por que la v1 murio
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;



