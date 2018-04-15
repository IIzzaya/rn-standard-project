import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";

//props为外部（父组件）传来的。state为组建内部的。
class HelloPage extends React.Component {
    constructor(props) {
        console.log("001-constructor CALLED");
        super(props);
        this.state = {
            message: "Hello message",
            count: 0
        };
    }

    componentWillMount() {
        console.log("componentWillMount CALLED-00002");
    }

    //首次渲染之后调用
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 100000)
    }
    

    onHelloButtonPressed = () => {
        console.log("HelloButtonPressed-0001");
        const {helloAction} = this.props;

        console.log("DispatchHelloAction-0002");
        helloAction.requestHelloFromServer("Hellofromclient");
    };

    //在接收来自夫组件的新props之前被调用
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps CALLED-0009");
        console.log("nextProps:");
        console.log(nextProps);
    }

    //this.setState之后调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate CALLED-0010");
        console.log("nextProps:");
        console.log(nextProps);
        console.log("nextState:");
        console.log(nextState);
        return true;
    }

    //在渲染之前被调用(装载除外),这里不能调用 this.setState()。
    //使用这个方法可以作为执行准备更新的一个好机会。
    //会在this.forceUpdate()之后调用
    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate CALLED-0011");
        console.log("nextProps:");
        console.log(nextProps);
        console.log("nextState:");
        console.log(nextState);
    }

    //在render()之后调用，装载除外
    componentDidUpdate(prevProps,prevState){
        console.log("componentWillUpdate CALLED-0012");
        console.log("prevProps:");
        console.log(prevProps);
        console.log("prevState:");
        console.log(prevState);
    }

    render() {
        console.log("render CALLED-00003");
        var {message} = this.state;
        var {helloReducer} = this.props;
        var {count} = this.state;
        let display;
        if (helloReducer != {} && helloReducer) display = helloReducer.response ? helloReducer.response.response : message;
        console.log(display);

        return (
            <View>
                <Text>Hello React Native!</Text>
                <Text>{message}</Text>
                <Text>
                    Life: {count} : {this.state.count}
                </Text>

                <Text style={styles.active}>Style</Text>
                <View style={[styles.active, styles.background]}>
                    <Text />
                </View>
                <Button onPress={this.onHelloButtonPressed} title={"Hello"} />
                {helloReducer && <Text>{display}</Text>}
            </View>
        );
    }

    //可以在其子组件树中的任何位置捕获JavaScript 错误，记录这些错误，
    //并显示备用 UI 而不是崩溃的组件树。 
    //错误边界在渲染过程中，在生命周期方法中，以及整个树下的构造函数中捕获错误。
    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
}

var styles = StyleSheet.create({
    background: {
        backgroundColor: "#222222"
    },
    active: {
        borderWidth: 2,
        borderColor: "#00ff00"
    }
});

export default HelloPage;
