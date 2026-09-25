# Task 017 - Redux Saga Healthcare Dashboard

## Overview

A healthcare dashboard built using React, Redux, and Redux-Saga.

### Features

- Pagination performance optimization
- Offline form submission queue
- API request cancellation
- Patient registration
- Patient details management

## Technologies Used

- React
- Redux
- Redux-Saga
- React-Redux
- JavaScript
- Fetch API
- JSONPlaceholder

## 1. Pagination Performance Optimization

The application fetches 10 patients from the API and stores all 10 patients in Redux.

The UI displays 5 patients per page.

### Pagination Flow

```text
API
 ↓
Fetch 10 Patients
 ↓
Redux Store
 ↓
Display 5 Patients
```

Page 1 displays patients 1–5.

Page 2 displays patients 6–10.

Changing pages does not make another API request because all patients are already stored in Redux.

Newly registered patients are also added to the Redux patient list, and the pagination updates dynamically.

## 2. Offline Form Submission Queue

The Patient Registration Form contains:

- Patient Name
- Age
- Disease
- Doctor Assigned

### Online Submission

```text
Patient Form
 ↓
SUBMIT_PATIENT_FORM
 ↓
Saga
 ↓
API
 ↓
ADD_PATIENT
 ↓
Redux Store
 ↓
UI
```

When the network is available, the patient is submitted directly to the API.

After a successful response, the new patient is added to the Redux patient list.

### Offline Submission

```text
Patient Form
 ↓
SUBMIT_PATIENT_FORM
 ↓
Saga
 ↓
Network unavailable
 ↓
QUEUE_PATIENT_FORM
 ↓
Redux offlineQueue
```

When the network is unavailable, the patient data is stored in the Redux offline queue.

### Processing the Queue

```text
Network Returns
 ↓
NETWORK_ONLINE
 ↓
Saga
 ↓
Read offlineQueue
 ↓
Send queued patients to API
 ↓
REMOVE_QUEUED_PATIENT
```

Successfully processed patients are removed from the offline queue.

## 3. API Request Cancellation

Patient details are loaded through Redux-Saga.

The application uses `takeLatest()` so that when a new patient-details request is made, the previous Saga task is cancelled and the latest request continues.

### Flow

```text
Patient A Selected
 ↓
FETCH_PATIENT_DETAILS
 ↓
Request A Starts
 ↓
Patient B Selected
 ↓
FETCH_PATIENT_DETAILS
 ↓
takeLatest()
 ↓
Previous Saga Task Cancelled
 ↓
Request B Continues
 ↓
Patient B Details Displayed
```

## Redux-Saga Architecture

```text
React Component
 ↓
Dispatch Action
 ↓
Redux-Saga Middleware
 ↓
Watcher Saga
 ↓
Worker Saga
 ↓
API / Queue Logic
 ↓
Reducer
 ↓
Redux Store
 ↓
UI Re-render
```

## Redux-Saga Effects Used

### `call()`

Used to call API functions.

```js
yield call(fetchPatientsAPI);
```

### `put()`

Used to dispatch Redux actions from Saga.

```js
yield put({
    type: SET_PATIENTS,
    payload: data
});
```

### `takeEvery()`

Runs the worker Saga for every matching action.

```js
yield takeEvery(
    FETCH_PATIENTS,
    fetchPatientsSaga
);
```

### `takeLatest()`

Keeps the latest Saga task for a matching action.

```js
yield takeLatest(
    FETCH_PATIENT_DETAILS,
    fetchPatientDetailsSaga
);
```

### `select()`

Used to read data from the Redux Store.

```js
const queue = yield select(
    (state) => state.offlineQueue
);
```

## Redux State

```js
const initialState = {
  patients: [],
  offlineQueue: [],
  patientDetails: null,
};
```

### `patients`

Stores the patients retrieved from the API and newly registered patients.

### `offlineQueue`

Stores patient registration data when the network is unavailable.

### `patientDetails`

Stores the details of the selected patient.

## Redux Actions

```text
FETCH_PATIENTS
SET_PATIENTS
ADD_PATIENT

SUBMIT_PATIENT_FORM
QUEUE_PATIENT_FORM

FETCH_PATIENT_DETAILS
SET_PATIENT_DETAILS

NETWORK_ONLINE
REMOVE_QUEUED_PATIENT
```

## Project Structure

```text
task017_redux_saga/
│
├── components/
│   ├── PatientList.js
│   ├── PatientForm.js
│   └── PatientDetails.js
│
├── redux/
│   ├── actions.js
│   ├── reducer.js
│   ├── saga.js
│   └── store.js
│
├── Task017.js
├── Task017.css
└── README.md
```

## Testing

### Pagination

- Fetch 10 patients
- Verify all 10 patients are stored in Redux
- Verify 5 patients are displayed per page
- Navigate between pages
- Verify no additional patient-list API request is made
- Add a new patient
- Verify the new patient is added to Redux
- Verify pagination updates dynamically

### Online Patient Registration

- Submit a patient while online
- Verify the API request
- Verify the API response
- Verify `ADD_PATIENT`
- Verify the patient is added to Redux
- Verify the patient appears in the patient list

### Offline Patient Registration

- Switch the browser network to Offline
- Submit a patient
- Verify `QUEUE_PATIENT_FORM`
- Verify the patient appears in `offlineQueue`
- Restore the network connection
- Verify `NETWORK_ONLINE`
- Verify the queued patient is sent to the API
- Verify the processed patient is removed from the queue

### Patient Details Cancellation

- Select Patient 1
- Start the details request
- Quickly select Patient 2
- Verify the latest request is handled
- Verify Patient 2 details are displayed

## Application Flow

### Patient Fetching

```text
PatientList
 ↓
FETCH_PATIENTS
 ↓
Watcher Saga
 ↓
fetchPatientsSaga
 ↓
API
 ↓
SET_PATIENTS
 ↓
Reducer
 ↓
Redux Store
 ↓
PatientList
```

### Patient Registration

```text
PatientForm
 ↓
SUBMIT_PATIENT_FORM
 ↓
Saga
 ├── Online
 │    ↓
 │   API
 │    ↓
 │   ADD_PATIENT
 │
 └── Offline
      ↓
     QUEUE_PATIENT_FORM
      ↓
     offlineQueue
```

### Patient Details

```text
Patient Selection
 ↓
FETCH_PATIENT_DETAILS
 ↓
takeLatest()
 ↓
fetchPatientDetailsSaga
 ↓
API
 ↓
SET_PATIENT_DETAILS
 ↓
Reducer
 ↓
Redux Store
 ↓
PatientDetails
```
