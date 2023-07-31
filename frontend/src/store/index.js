import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cardSlice from "./card/cardSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        card: cardSlice,
    }
});
