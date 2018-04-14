import React from "react";
import {DeviceEventEmitter} from "react-native";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";

import ConfigureStore from "./store/configureStore";
import RootContainer from "./containers/rootContainer";
import "./utils/storageUtil";

const {store, persistor} = ConfigureStore();

class Root extends React.Component {
    constructor(props) {
        super(props);
        global.store = store;
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default Root;
