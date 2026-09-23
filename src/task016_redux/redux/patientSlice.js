import { createSlice } from "@reduxjs/toolkit";

// creating a slice specifically for patients.
const patientSlice = createSlice({
    
    // This identifies our slice. slice name is patients
    name: "patients",

    // This is the state when our application starts. 
    initialState: {
        patients: []
    },

    // creating reducers that define how the state can change. one is add, another is delete.
    reducers: {
        addPatient: (state, action) => {
            state.patients.push(action.payload);
            // action.payload -> The data we send with the action.
        },  

        deletePatient: (state, action) => {
            state.patients = state.patients.filter(
                (patient) => patient !== action.payload
            );
            // The filter() keeps every patient except the one we delete.
        }
    }
});

// Export the actions => This allows hooks like addPatient(),deletePatient() to be used
export const { addPatient, deletePatient } = patientSlice.actions;

// exports the reducer so that we can put it into our Redux store.
export default patientSlice.reducer;