import React from 'react';
import { Switch, Route } from 'react-router';

import Login from './pages/login/Login';
import SignUp from "./pages/signUp/SignUp";
import Events from "./pages/events/Events";
import EventTasks from "./pages/eventTasks/EventTasts";

export default function Routes() {
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/event" component={Events} />
        <Route path="/event/:eventId+" component={EventTasks} />
    </Switch>
}