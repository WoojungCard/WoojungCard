import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    storeIdCheckResult : "",
    storeInfo : {},
    storeListData : [],
    StoreAppStatusData : [],
    storeSalesList : [],
    storeSalesData : {},
    depositData : 0,
    status : "idle",
    storeLoginStatus : "idle",
    signUpStatus: "idle",
    updateStatus : "idle",
    insertStatus : "idle",
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
        const response = await api("POST", "/store/signup", store);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

export const storeLogin = createAsyncThunk("/store/login", async(loginInfo2, thunkAPI) => {
    try {
        const response = await api("POST", "/store/login", loginInfo2);
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
        const response = await api("PUT", "/store/update", info);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response);
    }
})

//store Application Status
export const StoreAppStatus = createAsyncThunk("/store/storeAppStatus",async()=>{
    const response = await api("GET","/store/storeAppStatus");
    return response.data;
})

//store Application Status Change
export const StoreAppStatusChange = createAsyncThunk("/store/storeAppStatusChange",async(id, thunkAPI)=>{
    const response = await api("PUT","/store/storeAppStatusChange", id);
    return response.data;
})

// Stroe Sales Management
export const storeSalesManagement = createAsyncThunk("/store/storeSalesManagement", async(request) => {
    const response = await api("POST", "/store/storeSalesManagement", request);
    return response.data;
})

// Store Payment Deposit
export const storeSalesReceiptDetails = createAsyncThunk("/store/storeSalesReceiptDetails", async(request) => {
    const response = await api("POST", "/store/storeSalesReceiptDetails", request);
    return response.data;
});

export const insertStorePayment = createAsyncThunk("/store/storePayment", async(request) => {
    const response = await api("POST", "/store/storePayment", request);
    return response.data;
});

export const getStorePaymentDeposit = createAsyncThunk("/store/storePaymentDeposit", async(request) => {
    console.log(request);
    const response = await api("POST", "/store/storePaymentDeposit", request);
    console.log(response.data)
    return response.data;
});

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
                state.signUpStatus = "loading";
            })
            .addCase(storeSignUp.fulfilled,(state, action) => {
                state.signUpStatus = "successed";
                state.data = action.payload;
            })
            .addCase(storeSignUp.rejected, (state, action) => {
                state.signUpStatus = "failed";
                state.error = action.payload.data;
            })
            .addCase(storeLogin.pending, (state, action) => {
                state.storeLoginStatus = "loading";
            })
            .addCase(storeLogin.fulfilled,(state, action) => {
                state.storeLoginStatus = "successed";
                state.data = action.payload;
                localStorage.setItem("RefreshToken", action.payload.refreshToken);
                localStorage.setItem("AccessToken", action.payload.accessToken);
            })
            .addCase(storeLogin.rejected, (state, action) => {
                state.storeLoginStatus = "failed";
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
                state.updateStatus = "loading";
            })
            .addCase(storeInfoUpdate.fulfilled,(state, action) => {
                state.updateStatus = "successed";
                state.data = action.payload;
            })
            .addCase(storeInfoUpdate.rejected, (state, action) => {
                state.updateStatus = "failed";
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
            .addCase(storeSalesManagement.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(storeSalesManagement.fulfilled,(state, action) => {
                state.status = "successed";
                state.storeSalesList = action.payload;
            })
            .addCase(storeSalesManagement.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(storeSalesReceiptDetails.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(storeSalesReceiptDetails.fulfilled,(state, action) => {
                state.status = "successed";
                state.storeSalesData = action.payload;
            })
            .addCase(storeSalesReceiptDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(insertStorePayment.pending, (state, action) => {  
                state.insertStatus = "loading";
            })
            .addCase(insertStorePayment.fulfilled,(state, action) => {
                state.insertStatus = "successed";
                state.data = action.payload;
            })
            .addCase(insertStorePayment.rejected, (state, action) => {
                state.insertStatus = "failed";
                state.error = action.payload;
            })
            .addCase(getStorePaymentDeposit.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(getStorePaymentDeposit.fulfilled,(state, action) => {
                state.status = "successed";
                state.depositData = action.payload;
            })
            .addCase(getStorePaymentDeposit.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});
export default storeSlice.reducer;