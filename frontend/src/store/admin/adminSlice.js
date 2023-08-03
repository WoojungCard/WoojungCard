import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api"

const initialState = {
    genderAgeData : [],
    businessTypeData : [],
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
    }
});

export default adminSlice.reducer;