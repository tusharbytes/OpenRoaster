import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("access_token");
console.log(token)

export const getProfile = createAsyncThunk("getProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://roaster.shopifystudio.xyz/api/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // console.log(response.data, "response.dataofkdoslice")
        return response.data.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data || "Something went wrong"); // Fix: Proper error handling
    }
});

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileData: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profileData = action.payload;
                state.loading = false;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default profileSlice.reducer;
