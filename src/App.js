import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

import "./index.css";

function App() {
	return (
		<Router>
			<Header />
			<Route exact path="/" component={Main} />
			<Fragment>
				<Switch>
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
