import {DeviceEventEmitter} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";

import HelloContainer from "./helloContainer";

import {
    InteractionManager,
    RefreshControl,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Dimensions,
    PixelRatio
} from "react-native";

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const TabContainer = TabNavigator(
    {
        HelloPage: {
            screen: HelloContainer
        }
    },
    {
        lazy: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: "#616161",
            inactiveTintColor: "#BDBDBD",
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: "#fff",
                elevation: 20,
                shadowOffset: {width: 0, height: 0},
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowRadius: px2dp(16 / 2)
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        },
        navigationOptions: {
            // tabBarOnPress: function(args) {
            //     const {scene, jumpToIndex} = args;
            //     const {index} = scene;
            //     DeviceEventEmitter.emit("TabChanged", index);
            //     jumpToIndex(index);
            // }
        }
    }
);

const RootContainer = StackNavigator(
    {
        helloContainer: {
            screen: HelloContainer
        }
    },
    {
        headerMode: "screen",
        mode: "card",
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#ffffff"
            },
            headerTitleStyle: {
                color: "#000000",
                fontSize: 20
            },
            headerTintColor: "#000000",
            sceneStyle: {
                shadowColor: "black",
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 1,
                shadowRadius: 5
            }
        }
    }
);

export default RootContainer;