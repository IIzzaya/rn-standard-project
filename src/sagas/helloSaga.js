import {put, take, call, fork} from "redux-saga/effects";

import Toast from "../utils/toast";
import request from "../utils/request";
import {receiveHelloFromServer} from "../actions/helloAction";
import {HELLO_URL} from "../constants/urls";
import {NETWORK_ERROR} from "../constants/stateCode";

export function* requestHelloSaga(message) {
    try {
        console.log("TryToGetData-0004");
        const data = yield call(request, `${HELLO_URL}?message=${message}`, "get");
        console.log("DataReceive-0005:");
        console.log(data);
        console.log("DispatchReceiveHelloAction-0006");
        yield put(receiveHelloFromServer(data.message));
    } catch (error) {
        console.log("DataReceiveFailed-0004");
        Toast.showShort(NETWORK_ERROR.INFO);
    }
}

export function* watchRequestHello() {
    while (true) {
        const {message} = yield take("Request Hello");
        console.log("HelloSagaEnter-0003");
        yield fork(requestHelloSaga, message);
    }
}
