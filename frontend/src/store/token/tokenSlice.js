import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../api";

const initialState = {
    data: {},
    status : "idle",
    error: null
}

export const checkJwt = createAsyncThunk("/token", async () => {
    const response = await api("GET", "/token");
    if (response.data !== "OK" && response.status === 200)
      localStorage.setItem("AccessToken", response.data);
    return response.status;
});

const tokenSlice = createSlice({
    name: "token",
    initialState,
    extraReducers(builder) {
        builder 
            .addCase(checkJwt.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(checkJwt.fulfilled,(state, action) => {
                state.status = "successed";
                state.data = action.payload;
            })
            .addCase(checkJwt.rejected, (state, action) => {
                state.status = "failed";
            })
}
});
export default tokenSlice.reducer;