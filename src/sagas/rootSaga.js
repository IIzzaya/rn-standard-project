import {all, fork} from "redux-saga/effects";

import {watchRequestHello} from "./helloSaga";

export default function* rootSaga() {
    yield all([
        fork(watchRequestHello)
    ]);
}
