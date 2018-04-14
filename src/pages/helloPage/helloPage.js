import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";

class HelloPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello message",
            count: 0
        };
    }

    //首次渲染之后调用
    /*
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000)
    }
    */

    onHelloButtonPressed = () => {
        console.log("HelloButtonPressed-0001");
        const {helloAction} = this.props;
        
        console.log("DispatchHelloAction-0002");
        helloAction.requestHelloFromServer("Hellofromclient");
       
    };

    componentWillReceiveProps(nextProps) {
        console.log("PageReceiveProps-0009");
        console.log(nextProps);
    }

    render() {
        var {message} = this.state;
        var {helloReducer} = this.props;
        var {count} = this.state;
        //console.log(this.props);
        console.log(this.state);
        let display;
        if (helloReducer) display = helloReducer.response ? helloReducer.response.response : message;

        return (
            <View>
                <Text>Hello React Native!</Text>
                <Text>{message}</Text>
                <Text>Life: {count} : {this.state.count}</Text>
                
                <Text style={styles.active}>Style</Text>
                <View style={[styles.active, styles.background]}>
                <Text></Text>
                </View>
                <Button onPress={this.onHelloButtonPressed} title={"Hello"} />
                {helloReducer && <Text>{helloReducer.response.response}</Text>}
            </View>
        );
    }
}

var styles = StyleSheet.create(
    {
        background: {
            backgroundColor: "#222222"
        },
        active: {
            borderWidth: 2,
            borderColor: "#00ff00"
        }
    }
)

export default HelloPage;
