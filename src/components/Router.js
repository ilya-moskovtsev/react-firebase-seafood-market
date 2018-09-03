import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

// Routing with React Router
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            {/*:storeId will be available in props.match.params*/}
            <Route path="/store/:storeId" component={App}/>
            {/*Leave off the path to catch all*/}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;