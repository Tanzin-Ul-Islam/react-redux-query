import { configureStore } from '@reduxjs/toolkit'
import { apiCore } from './services/apiCore'
export const store = configureStore({
    reducer: {
        [apiCore.reducerPath]: apiCore.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiCore.middleware),
})