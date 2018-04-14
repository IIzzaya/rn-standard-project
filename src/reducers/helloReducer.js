export default function helloReducer(state = {}, action) {
    switch (action.type) {
        case "Receive Hello":
            console.log("ReduceSuccessAction-0007");
            console.log("---ReducerStateA---");
            console.log(state);
            console.log("---ReducerStateB---");
            console.log({response: action});
            console.log("---ReducerStateC---");
            console.log(
                Object.assign({}, state, {
                    response: action
                })
            );
            //后面的会覆盖前面的
            return Object.assign({}, state, {
                response: action
            });
        default:
            return state;
    }
}
