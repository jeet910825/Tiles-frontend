import { setupListeners } from "@reduxjs/toolkit/query"
import { productSlice } from "../feature.js/app/productApi"
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer:{
        [productSlice.reducerPath]:productSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
})
  
setupListeners(store.dispatch)