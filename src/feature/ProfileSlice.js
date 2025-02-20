import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("access_token")

const getProfile = createAsyncThunk("getProfile", async () => {

    try {
        const response = await axios.get(`https://roaster.shopifystudio.xyz/api/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)

    }
})

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        profileData: {},
        loading: false

    }, reducers: {},
    extraReducers: (builders) => {
        builders
            .addCase(getProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profileData = action.payload
                state.loading = false
            })
            .addCase(getProfile.rejected, (state) => {
                state.loading = false
            })
    }
})

export default profileSlice.reducer