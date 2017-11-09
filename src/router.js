import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './store/containers/Login';
import Regist from './store/containers/regist';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './components/withRoot';

const styles = {
    root: {
        textAlign: 'center',
        paddingTop: 200
    }
}

const Router = () => (
    <div>
        <main>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/regist" component={Regist} />
        </main>
    </div>
)

export default withRoot(withStyles(styles)(Router));
