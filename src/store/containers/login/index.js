import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginComponent from '../../../components/login/index.jsx';

import {
    inputUserName,
    inputPassword
} from '../../actions/login';

const Login = ({ state, actions }) => (
    <LoginComponent 
        state={{
            userName: state.userName,
            password: state.password
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
            dumpToRegist: actions.dumpToRegist
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        userName: state.userName,
        password: state.password
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
        dumpToRegist: () => push('/regist')
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);