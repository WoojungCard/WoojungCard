import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    data: {},
    cardListData: [],
    cardInfo: {},
    status : "idle",
    error: null
}

// Card Get Info
export const cardGetInfo = createAsyncThunk("/card/getInfo/{cardId}", async (id) => {
    // console.log(id);
    const response = await api("GET", `/card/getInfo/${id}`);
    return response.data;
});

// Card List (ADMIN)
export const cardList = createAsyncThunk("/card/getCardList", async() => {
	const response = await api("GET", "/card/getCardList");
    console.log(response.data);
	return response.data;
});

const cardSlice = createSlice({
    name: "card",
    initialState,
    extraReducers(builder) {
        builder
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
            .addCase(cardList.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.cardListData = action.payload;
            })
    }
});
export default cardSlice.reducer;