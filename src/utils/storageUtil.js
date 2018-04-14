import {AsyncStorage, DeviceEventEmitter} from "react-native";
import Storage from "react-native-storage";

const storageUtil = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
});

global.storageUtil = storageUtil;
