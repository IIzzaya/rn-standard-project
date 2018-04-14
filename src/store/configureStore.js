import {createStore, applyMiddleware, compose} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {logger} from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["helloReducer"]
};

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(logger);

export default function configureStore() {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const enhancers = compose(applyMiddleware(...middlewares));
    let store = createStore(persistedReducer, enhancers);
    let persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return {store, persistor};
}
