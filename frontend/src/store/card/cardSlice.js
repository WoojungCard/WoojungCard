import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    cardListData : [],
    data: {},
    cardInfo: {},
    cardPossessionList: [],
    cardAppHistoryData: [],
    cardCancelHistoryData: [],
    cardUsageHistory: [],
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
    return response.data;
});

// User Card Application History
export const cardAppHistory = createAsyncThunk("/card/appHistory", async() => {
    const response = await api("GET", "/card/appHistory");
    return response.data;
})

// User Card Application Approve
export const userCardAppApprove = createAsyncThunk("/card/approve", async(id) => {
    const response = await api("PUT", "/card/approve", {"id" : id});
    return response.data;
})

// User Card Cancel Apllication
export const userCardCancelApp = createAsyncThunk("/card/cancelApp", async(id) => {
    const response = await api("PUT", "/card/cancelApp", id);
    return response.data; 
})

// User Card Cancel Application History
export const userCardCancelHistory = createAsyncThunk("/card/cancelAppHistory", async() => {
    const response = await api("GET", "/card/cancelAppHistory");
    return response.data;
})

// User Card Cancel Approve
export const userCardCancelApprove = createAsyncThunk("/card/cancelApprove", async(id) => {
    console.log(id);
    const response = await api("PUT", "/card/cancelApprove", id);
    console.log(response.data);
    return response.data;
})

// User Card Possession History
export const userCardPossessionHistory = createAsyncThunk("/card/userCardPossession", async() => {
    const response = await api("GET", "/card/userCardPossession");
    return response.data;
})

// User Card Usage History
export const userCardUsageHistory = createAsyncThunk("/card/userUsageHistory", async(request) => {
    const response = await api("POST", "/card/userUsageHistory", request);
    console.log(response.data);
    return response.data;
})

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
            .addCase(cardAppHistory.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(cardAppHistory.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardAppHistoryData = action.payload;
            })
            .addCase(cardAppHistory.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardAppApprove.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardAppApprove.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(userCardAppApprove.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardCancelApp.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardCancelApp.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(userCardCancelApp.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardCancelHistory.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardCancelHistory.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardCancelHistoryData = action.payload;
            })
            .addCase(userCardCancelHistory.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardCancelApprove.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardCancelApprove.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(userCardCancelApprove.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardPossessionHistory.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardPossessionHistory.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardPossessionList = action.payload;
            })
            .addCase(userCardPossessionHistory.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userCardUsageHistory.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userCardUsageHistory.fulfilled,(state, action) => {
                state.status = "successed";
                state.cardUsageHistory = action.payload;
            })
            .addCase(userCardUsageHistory.rejected, (state, action) => {
                state.status = "failed";
            })
    }
});
export default cardSlice.reducer;