import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    userListData: [],
    idCheckResult : "",
    userInfo : {},
    userAppInfo : {},
    userCardAppStatusData : [],
    status : "idle",
    loginStatus : "idle",
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
        const response = await api("POST", "/user/login", loginInfo);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

// User Get Info
export const userGetInfo = createAsyncThunk("/user/info", async() => {
    const response = await api("GET", "/user/info");
    return response.data;
}) 

// User Info Update
export const userInfoUpdate = createAsyncThunk("/user/infoChange", async(info, thunkAPI) => {
    try {
        const response =await api("PUT", "/user/infoChange", info);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

// User Card Application Info
export const userCardAppInfo= createAsyncThunk("/user/cardAppInfo", async() => {
    const response = await api("GET", "/user/cardAppInfo");
    return response.data;
})

// Get User List (ADMIN)
export const userList = createAsyncThunk("/user/getUserList", async() => {
	const response = await api("GET", "/user/getUserList");
    // console.log(response.data);
	return response.data;
})

// User Card Application Status
export const userCardAppStatus = createAsyncThunk("/user/cardAppStatus", async() => {
    const response = await api("GET", "/user/cardAppStatus");
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
                state.error = action.err.message;
            })
            .addCase(userLogin.pending, (state, action) => {
                state.loginStatus = "loading";
            })
            .addCase(userLogin.fulfilled,(state, action) => {
                state.loginStatus = "successed";
                state.data = action.payload;
                localStorage.setItem("RefreshToken", action.payload.refreshToken);
                localStorage.setItem("AccessToken", action.payload.accessToken);
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loginStatus = "failed";
                state.error = action.payload;
            })
            .addCase(userGetInfo.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(userGetInfo.fulfilled,(state, action) => {
                state.status = "successed";
                state.userInfo = action.payload;
            })
            .addCase(userGetInfo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(userInfoUpdate.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(userInfoUpdate.fulfilled,(state, action) => {
                state.status = "successed";
                state.userInfo = action.payload;
            })
            .addCase(userInfoUpdate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(userCardAppInfo.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(userCardAppInfo.fulfilled,(state, action) => {
                state.status = "successed";
                state.userAppInfo = action.payload;
            })
            .addCase(userCardAppInfo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(userList.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userListData = action.payload;
            })
            .addCase(userCardAppStatus.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(userCardAppStatus.fulfilled,(state, action) => {
                state.status = "successed";
                state.userCardAppStatusData = action.payload;
            })
            .addCase(userCardAppStatus.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});
export default userSlice.reducer;