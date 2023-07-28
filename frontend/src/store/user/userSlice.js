import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    idCheckResult : "",
    status : "idle",
    error: null
}

// User Id Check
export const userIdCheck = createAsyncThunk("/user/idcheck", async (userId, thunkAPI) => {
    try {
        const response = await api("POST", "/user/idcheck", userId);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

// User Sign Up
export const userSignUp = createAsyncThunk("/user/signup", async (user, thunkAPI) => {
    try {
        const response = await api("POST", "/user/signup", user);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

// User Login
export const userLogin = createAsyncThunk("/user/login", async(loginInfo, thunkAPI) => {
    try {
        console.log(loginInfo);
        const response = await api("POST", "/user/login", loginInfo);
        console.log(response.data);
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
                state.idCheckResult = action.payload;
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
            .addCase(userLogin.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userLogin.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
                localStorage.setItem("RefreshToken", action.payload.refreshToken);
                localStorage.setItem("AccessToken", action.payload.accessToken);
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.data;
            })
    }
});
export default userSlice.reducer;