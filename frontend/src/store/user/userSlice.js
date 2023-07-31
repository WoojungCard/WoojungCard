import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    userListData: [],
    idCheckResult : "",
    status : "idle",
    error: null
}

export const userIdCheck = createAsyncThunk("/user/idcheck", async (userId, thunkAPI) => {
    try {
        const response = await api("POST", "/user/idcheck", userId);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const userSignUp = createAsyncThunk("/user/signup", async (user, thunkAPI) => {
    try {
        console.log(user);
        const response = await api("POST", "/user/signup", user);
        // console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const userList = createAsyncThunk("/user/getUserList", async() => {
	const response = await api("GET", "/user/getUserList");
    // console.log(response.data);
	return response.data;
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
            .addCase(userList.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userListData = action.payload;
            })
    }
});
export default userSlice.reducer;