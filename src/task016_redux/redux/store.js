import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientSlice";

// Store = place where our global state lives

export const store = configureStore({
    reducer: {
        patient: patientReducer
        // patient section of the store is managed by patientReducer."
    }
});