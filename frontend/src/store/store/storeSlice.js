import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    storeIdCheckResult : "",
    storeInfo : {},
    storeListData : [],
    StoreAppStatusData : [],
    status : "idle",
    loginStatus : "idle",
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

export const storeLogin = createAsyncThunk("/store/login", async(loginInfo2, thunkAPI) => {
    try {
		// console.log(loginInfo2);
        const response = await api("POST", "/store/login", loginInfo2);
        // console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const storeList = createAsyncThunk("/store/storeAppInfo", async() => {
	const response = await api("GET", "/store/storeAppInfo");
	return response.data;	
})
	

// store Get Info
export const storeGetInfo = createAsyncThunk("/store/info", async() => {
    const response = await api("GET", "/store/info");
    return response.data;
}) 

// store Info Update
export const storeInfoUpdate = createAsyncThunk("/store/update", async(info, thunkAPI) => {
    try {
		console.log(info);
        const response = await api("PUT", "/store/update", info);
        // console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})
//store Application Status
export const StoreAppStatus = createAsyncThunk("/store/storeAppStatus",async()=>{
    const response = await api("GET","/store/storeAppStatus");
    // console.log(response.data);
    return response.data;
})

//store Application Status Change
export const StoreAppStatusChange = createAsyncThunk("/store/storeAppStatusChange",async()=>{
    const response = await api("PUT","/store/storeAppStatusChage");
   	return response.data;
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
            .addCase(storeLogin.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(storeLogin.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
                localStorage.setItem("RefreshToken", action.payload.refreshToken);
                localStorage.setItem("AccessToken", action.payload.accessToken);
            })
            .addCase(storeLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
             .addCase(storeGetInfo.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(storeGetInfo.fulfilled,(state, action) => {
                state.status = "successed";
                state.storeInfo = action.payload;
            })
            .addCase(storeGetInfo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(storeInfoUpdate.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(storeInfoUpdate.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(storeInfoUpdate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(storeList.rejected, (state, action)=> {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(storeList.fulfilled,(state, action)=> {
				state.status = "successed";
				state.storeListData = action.payload;
			})
			.addCase(StoreAppStatus.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(StoreAppStatus.fulfilled,(state, action)=> {
				state.status = "successed";
				state.StoreAppStatusData = action.payload;
			})
			.addCase(StoreAppStatusChange.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(StoreAppStatusChange.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});
export default storeSlice.reducer;