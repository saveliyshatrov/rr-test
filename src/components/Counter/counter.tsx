import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../../actions'

function Counter(Props:any) {
    return (
        <>
            <h1 className="mt-5">Count: {Props.counter}</h1>
            <div className={'mt-3 w-50 d-flex flex-row justify-content-between'}>
                <button onClick={Props.inc} className={'btn btn-outline-primary'}>Plus</button>
                <button onClick={Props.dec} className={' btn btn-outline-danger'}>Minus</button>
                <button onClick={Props.rnd} className={'btn btn-outline-warning'}>Plus RANDOM</button>
                <button onClick={Props.zero} className={'btn btn-outline-info'}>Make 0</button>
            </div>
        </>
    );
}

const mapStateToProps = (state:any) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
