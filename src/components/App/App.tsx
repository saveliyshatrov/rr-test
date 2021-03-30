import React from 'react';
import Counter from "../Counter";
import {connect} from "react-redux";

function App(Props:any) {
    document.title = Props.result
    return (
        <>
            <Counter/>
        </>
    )
}

const mapStateToProps = (state:any) => {
    return {
        result: state
    }
}

export default connect(mapStateToProps)(App)
