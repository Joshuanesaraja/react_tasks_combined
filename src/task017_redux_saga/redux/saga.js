import {
    call,
    put,
    takeEvery,
    takeLatest,
    select
} from "redux-saga/effects";

import {
    FETCH_PATIENTS,
    SET_PATIENTS,
    SUBMIT_PATIENT_FORM,
    QUEUE_PATIENT_FORM,
    FETCH_PATIENT_DETAILS,
    SET_PATIENT_DETAILS,
    NETWORK_ONLINE,
    ADD_PATIENT,
    REMOVE_QUEUED_PATIENT,
    SET_STATUS
} from "./actions";

// Creating our API function for fetch, submit, JSONPlaceholder as the mock API
function fetchPatientsAPI() {
    return fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=10"
    ).then((res) => res.json());
}

function submitPatientAPI(patient) {
    return fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        }
    ).then((res) => res.json());
}

function fetchPatientDetailsAPI(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            )
                .then((res) => res.json())
                .then((data) => resolve(data));
        }, 2000);
    });
}

// Worker Saga for fetching patients
function* fetchPatientsSaga() {
    try {

        yield put({
            type: SET_STATUS,
            payload: "Fetching patients..."
        });

        const data = yield call(fetchPatientsAPI);

        console.log("Patients fetched:", data);

        yield put({
            type: SET_PATIENTS,
            payload: data
        });

        yield put({
            type: SET_STATUS,
            payload: "Patients fetched successfully"
        });
    } catch (error) {
        console.error(
            "Failed to fetch patients:",
            error
        );

        yield put({
            type: SET_STATUS,
            payload: "Failed to fetch patients"
        });
    } 
}

// Worker Saga for submitting a patient
function* submitPatientSaga(action) {
    if (navigator.onLine) {
        try {
            const data = yield call(
                submitPatientAPI,
                action.payload
            );

            console.log("Patient added:", data);

            yield put({
                type: ADD_PATIENT,
                payload: data
            });

            yield put({
                type: SET_STATUS,
                payload: "Patient added successfully"
            });
        } catch (error) {
            console.error("Failed to add patient:", error);

            yield put({
                type: SET_STATUS,
                payload: "Failed to add patient"
            });
        }
    } else {
        console.log(
            "Patient added to offline queue:",
            action.payload
        );

        yield put({
            type: QUEUE_PATIENT_FORM,
            payload: action.payload
        });

        yield put({
            type: SET_STATUS,
            payload: "Patient added to offline queue"
        });
    }
}

// Worker Saga for processing offline queue
function* processOfflineQueueSaga() {
    const queue = yield select(
        (state) => state.offlineQueue
    );

    console.log("Offline queue:", queue);

    if (queue.length === 0) {
        console.log("No patients in offline queue");

        yield put({
            type: SET_STATUS,
            payload: "No patients in offline queue"
        });

        return;
    }

    console.log("Processing offline queue...");

    yield put({
        type: SET_STATUS,
        payload: "Online: Processing offline queue"
    });

    for (const patient of queue) {
        try {
            const data = yield call(
                submitPatientAPI,
                patient
            );

            yield put({
                type: ADD_PATIENT,
                payload: data
            });

            console.log(
                "Offline patient submitted:",
                data
            );

            yield put({
                type: REMOVE_QUEUED_PATIENT
            });

            yield put({
                type: SET_STATUS,
                payload: "Offline patient submitted successfully"
            });
        } catch (error) {
            console.error(
                "Failed to submit offline patient:",
                error
            );

            yield put({
                type: SET_STATUS,
                payload: "Failed to submit offline patient"
            });
        }
    }
}

// Worker Saga for fetching patient details
function* fetchPatientDetailsSaga(action) {
    try {

        console.log(
            `Fetching Patient ${action.payload}...`
        );

        yield put({
            type: SET_STATUS,
            payload: `Fetching Patient ${action.payload}...`
        });

        const data = yield call(
            fetchPatientDetailsAPI,
            action.payload
        );

        console.log("Patient details:", data);

        yield put({
            type: SET_PATIENT_DETAILS,
            payload: data
        });

        yield put({
            type: SET_STATUS,
            payload: `Patient ${action.payload} details loaded`
        });
    } catch (error) {
        console.error(
            "Failed to fetch patient details:",
            error
        );

        yield put({
            type: SET_STATUS,
            payload: "Failed to fetch patient details"
        });
    } 
}

// rootSaga contains the watcher Sagas.
// Watcher Saga -> Whenever an action is dispatched,
// the corresponding Worker Saga runs.

export default function* rootSaga() {
    yield takeEvery(
        FETCH_PATIENTS,
        fetchPatientsSaga
    );

    yield takeEvery(
        SUBMIT_PATIENT_FORM,
        submitPatientSaga
    );

    yield takeEvery(
        NETWORK_ONLINE,
        processOfflineQueueSaga
    );

    yield takeLatest(
        FETCH_PATIENT_DETAILS,
        fetchPatientDetailsSaga
    );
}