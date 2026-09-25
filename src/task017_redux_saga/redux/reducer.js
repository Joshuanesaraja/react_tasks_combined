import {
    SET_PATIENTS,
    ADD_PATIENT,
    QUEUE_PATIENT_FORM,
    SET_PATIENT_DETAILS,
    REMOVE_QUEUED_PATIENT,
    SET_STATUS,
    NETWORK_ONLINE,
    NETWORK_OFFLINE
} from "./actions";

const initialState = {

    // This will eventually contain the 10 patients fetched from the API.
    patients: [],

    // This is where we'll temporarily keep patient forms when there is no internet connection.
    offlineQueue: [],

    // This will hold the patient currently being viewed.
    patientDetails: null,

    networkStatus: navigator.onLine,

    status: "Ready"
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PATIENTS:
            return {
                ...state,
                patients: action.payload
            };

        case QUEUE_PATIENT_FORM:
            return {
                ...state,
                offlineQueue: [...state.offlineQueue, action.payload]
            };

        case SET_PATIENT_DETAILS:
            return {
                ...state,
                patientDetails: action.payload
            };

        case REMOVE_QUEUED_PATIENT:
            return {
                ...state,
                offlineQueue: state.offlineQueue.slice(1)
                // slice(1) -> We remove the first item because the Saga processes the queue one patient at a time.
            };

        case ADD_PATIENT:
            return {
                ...state,
                patients: [
                    ...state.patients,
                    action.payload
                ]
            };

        case NETWORK_ONLINE:
            return {
                ...state,
                networkStatus: true
            };

        case NETWORK_OFFLINE:
            return {
                ...state,
                networkStatus: false
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }
}