import * as React from 'react';
import TextField from 'material-ui/TextField';
import { Button } from 'material-ui';

class RegistComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>new user name</span>
                <TextField hintText="user name" value={state.newUserName} onChange={e => actions.inputNewUserName(e.target.value)} />
                <br />
                <span>new password</span>
                <TextField hintText="password" type="password" value={state.newPassword} onChange={e => actions.inputNewPassword(e.target.value)} />
                <br />
                <span>confirm password</span>
                <TextField hintText="confirm password" type="password" value={state.confirmPassword} onChange={e => actions.inputConfirmPassword(e.target.value)} />
                <br />
                <Button raised color="primary">Regist</Button>
                <Button raised color="accent" onClick={() => actions.reset()}>Reset</Button>
                <Button raised color="secondary" onClick={() => actions.dumpToLogin()}>Back To Login</Button>
            </div>
        )
    }
}

export default RegistComponent;