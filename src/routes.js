import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ApiCall from './ApiCall/ApiCall';


class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <ApiCall/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;