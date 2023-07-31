import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import storeSlice from "./user/storeSlice";
import cardSlice from "./card/cardSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        store: storeSlice,
        card: cardSlice
    }
});
