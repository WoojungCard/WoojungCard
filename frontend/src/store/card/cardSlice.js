import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    cardListData : [],
    cardInfo: {},
    data: {},
    status : "idle",
    error: null
}

// Card All list (state = Proceeding)
export const cardList = createAsyncThunk("/card/list", async() => {
    const response = await api("GET", "/card/list");
    return response.data;
})

// Card Get Info
export const cardGetInfo = createAsyncThunk("/card/getInfo/{cardId}", async (id) => {
    const response = await api("GET", `/card/getInfo/${id}`);
    console.log(response.data);
    return response.data;
});

const cardSlice = createSlice({
    name: "card",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(cardList.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(cardList.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardListData = action.payload;
            })
            .addCase(cardList.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(cardGetInfo.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(cardGetInfo.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardInfo = action.payload;
            })
            .addCase(cardGetInfo.rejected, (state, action) => {
                state.status = "failed";
            })
    }
});
export default cardSlice.reducer;