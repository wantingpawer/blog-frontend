import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Body from "./Body";
import Topics from "./Topics";
import Navbar from "./Navbar";

function Routes(){
    return (
        <Router>
            <div>
                <Navbar />
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