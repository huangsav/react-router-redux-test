import * as React from 'react';
import { Button, TextField } from 'material-ui';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>user name</span>
                <TextField hintText="user name" value={state.userName} onChange={e => actions.inputUserName(e.target.value)}/>
                <br />
                <span>password</span>
                <TextField hintText="password" value={state.password} onChange={e => actions.inputPassword(e.target.value)} />
                <br />
                <Button raised color="primary" onClick={() => actions.dumpToRegist()}>Login In</Button>
            </div>
        )
    }
}

export default LoginComponent;