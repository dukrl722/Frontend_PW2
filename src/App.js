import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Events from './pages/Events';
import EventTasks from './pages/EventTasks';

export default function App() {

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/event" component={Events} />
					<Route path="/event/:event+" component={EventTasks} />
				</Switch>
			</BrowserRouter>
		</>
	);
}