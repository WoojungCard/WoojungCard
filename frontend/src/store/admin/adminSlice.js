import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api"

const initialState = {
    genderAgeData : [],
    businessTypeData : [],
    dailyData : [],
    totalSalesData : {},
    userCardData : [],
    data : {},
    status : "idle",
    error: null
}

export const adminGenderAgeData = createAsyncThunk("/admin/getGenderAgeData", async(paymentDate, thunkAPI) => {
    const response = await api("PUT", "/admin/getGenderAgeData", paymentDate);
    // console.log(response.data);
    return response.data;
})

export const adminBusinessTypeData = createAsyncThunk("/admin/getBusinessTypeData", async(paymentDate, thunkAPI) => {
    const response = await api("PUT", "/admin/getBusinessTypeData", paymentDate);
    // console.log(response.data);
    return response.data;
})

export const adminDailyData = createAsyncThunk("/admin/getDailyData", async() => {
    const response = await api("GET", "/admin/getDailyData");
    // console.log(response.data);
    return response.data;
})

export const adminTotalSalesData = createAsyncThunk("/admin/getTotalData", async() => {
    const response = await api("GET", "/admin/getTotalData");
    // console.log(response.data);
    return response.data;
})

export const adminManageUserCard = createAsyncThunk("/admin/getUserCardData", async(id) => {
    const response = await api("POST", "/admin/getUserCardData", id);
    return response.data;
})

const adminSlice = createSlice({
    name: "admmin",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(adminGenderAgeData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(adminGenderAgeData.fulfilled, (state, action) => {
                state.status = "successed";
                state.genderAgeData = action.payload;
            })
            .addCase(adminBusinessTypeData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(adminBusinessTypeData.fulfilled, (state, action) => {
                state.status = "successed";
                state.businessTypeData = action.payload;
            })
            .addCase(adminDailyData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(adminDailyData.fulfilled, (state, action) => {
                state.status = "successed";
                state.dailyData = action.payload;
            })
            .addCase(adminTotalSalesData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(adminTotalSalesData.fulfilled, (state, action) => {
                state.status = "successed";
                state.totalSalesData = action.payload;
            })
            .addCase(adminManageUserCard.pending, (state, action) => {  
                state.status = "loading";
            })
            .addCase(adminManageUserCard.fulfilled,(state, action) => {
                state.status = "successed";
                state.userCardData = action.payload;
            })
            .addCase(adminManageUserCard.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});

export default adminSlice.reducer;