import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    storeIdCheckResult : "",
    status : "idle",
    error: null
}

export const storeIdCheck = createAsyncThunk("/store/idcheck", async (storeId, thunkAPI) => {
    try {
        const response = await api("POST", "/store/idcheck", storeId);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const storeSignUp = createAsyncThunk("/store/signup", async (store, thunkAPI) => {
    try {
       // console.log(store);
        const response = await api("POST", "/store/signup", store);
       // console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

const storeSlice = createSlice({
    name: "store",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(storeIdCheck.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(storeIdCheck.fulfilled,(state, action) => {
                state.status = "successed";
                state.storeIdCheckResult = action.payload;
            })
            .addCase(storeIdCheck.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(storeSignUp.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(storeSignUp.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(storeSignUp.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.data;
            })
    }
});
export default storeSlice.reducer;