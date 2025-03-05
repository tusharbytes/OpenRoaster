import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../service/Instance";

export const jobCreate =createAsyncThunk("JobCreate", async()=>{
    const response = await instance.post(`business/job/create`, payload);
    return response

}
)

const UserCreateSlice = createSlice({
    initialState:{
        UserCreateJob : [],
        error : null,
        loading:false
    },
    reducers:{},
    extraReducers:(builders)=>{
        builders
        .addCase(jobCreate.pending,(state)=>{
            state.loading = true
            state.error = false
        })
        .addCase(jobCreate.fulfilled,(state)=>{
            state.loading = true
            state.error = false
        })
    }
})