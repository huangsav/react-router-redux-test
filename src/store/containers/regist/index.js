import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import RegistComponent from '../../../components/regist/index.jsx';

import * as actions from '../../actions/regist';

const Regist = ({ state, actions }) => (
    <RegistComponent
        state={{
            newUserName: state.newUserName,
            newPassword: state.newPassword,
            confirmPassword: state.confirmPassword
        }}
        actions={{
            inputNewUserName: actions.inputNewUserName,
            inputNewPassword: actions.inputNewPassword,
            inputConfirmPassword: actions.inputConfirmPassword,
            reset: actions.reset,
            dumpToLogin: actions.dumpToLogin
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        newUserName: state.newUserName,
        newPassword: state.newPassword,
        confirmPassword: state.confirmPassword
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...actions,
        dumpToLogin: () => push('/login')
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Regist);