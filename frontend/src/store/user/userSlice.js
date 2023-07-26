import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    status : "idle",
    error: null
}

export const userIdCheck = createAsyncThunk("/user/idcheck", async (userId, thunkAPI) => {
    try {
        console.log(userId);
        const response = await api("POST", "/user/idcheck", userId);
        console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const userSignUp = createAsyncThunk("/user/signup", async (user, thunkAPI) => {
    try {
        const response = await api("POST", "/user/signup", user);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(userIdCheck.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userIdCheck.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(userIdCheck.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userSignUp.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userSignUp.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(userSignUp.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.data;
            })
    }
});
export default userSlice.reducer;