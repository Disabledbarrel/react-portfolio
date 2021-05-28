import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";

import "./index.css";

function App() {
	return (
		<Router>
			<Header />
			<Route exact path="/" component={Main} />
			<Fragment>
				<Switch>
					<Route exact path="/about" component={About} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
