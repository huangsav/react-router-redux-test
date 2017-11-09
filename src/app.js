import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routers';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    {
                        routes.map((item, i) => {
                            <Route key={i}{...item} />
                        })
                    }
                    <Redirect from="*" to="/"/>
                </Switch>
            </div>
        );
    }
}