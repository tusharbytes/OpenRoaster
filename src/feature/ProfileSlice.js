import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../service/Instance";


export const getProfile = createAsyncThunk("getProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await instance.get("me", 
         );
        return response.data.data;
    } catch (error) {
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
    reducers: {
       
    },
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
export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
