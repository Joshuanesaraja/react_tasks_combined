import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose
} from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import rootSaga from "./saga";

// Creates the Redux-Saga middleware.
const sagaMiddleware = createSagaMiddleware();

// to view the changes in redux dev tool
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creates the Redux store and connects Saga middleware to it.
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

// This starts our watcher saga.
sagaMiddleware.run(rootSaga);

export default store;