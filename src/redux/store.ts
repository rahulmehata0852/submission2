import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "./apis/userApi";


const reduxStore = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
    },
    // middleware: new Tuple()
    middleware: (mid) => mid().concat(UserApi.middleware)
})
export default reduxStore
