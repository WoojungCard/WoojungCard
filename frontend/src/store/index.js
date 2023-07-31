import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import storeSlice from "./user/storeSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        store: storeSlice
    }
});
