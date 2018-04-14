import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as HelloCreator from "../actions/helloAction";
import HelloPage from "../pages/helloPage/helloPage";

class HelloContainer extends React.Component {
    render() {
        return <HelloPage {...this.props} />;
    }
}

const mapStateToProps = state => {
    console.log("MapStateToProps-0008");
    return {
        helloReducer: state.helloReducer
    };
};

const mapDispatchToProps = dispatch => {
    const helloAction = bindActionCreators(HelloCreator, dispatch);
    return {
        helloAction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloContainer);