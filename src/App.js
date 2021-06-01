import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";

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
					<Route exact path="/work" component={Work} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
