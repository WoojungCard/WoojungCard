import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cardSlice from "./card/cardSlice";
import adminSlice from "./admin/adminSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        card: cardSlice,
        admin: adminSlice
    }
});
