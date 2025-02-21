import { configureStore } from "@reduxjs/toolkit";
import profileSlice  from "../feature/ProfileSlice";

const store = configureStore({
    reducer: {
        profile: profileSlice
    }
})

export default store