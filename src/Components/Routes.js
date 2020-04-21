import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Body from "./Body";
import Topics from "./Topics";

function Routes(){
    return (<Router>
        <div>
            <ul>    
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            </ul>

            <Switch>
            <Route path="/topics">
                <Topics />
            </Route>
            <Route path="/">
                <Body />
            </Route>
            </Switch>
        </div>
        </Router>)
}

export default Routes;