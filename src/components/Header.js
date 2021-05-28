import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";

export default class Header extends Component {
	state = {
		visibility: false,
	};
	changeState = () => {
		this.setState((prevState) => ({
			visibility: !prevState.visibility,
		}));
	};
	handleCallback = (childData) => {
		this.setState({ visibility: childData });
	};

	render() {
		return (
			<Fragment>
				<header id="header">
					<div
						className={`menu-btn ${this.state.visibility ? "close" : ""}`}
						onClick={this.changeState}
					>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
					</div>
					<NavBar
						visibility={this.state.visibility}
						parentCallback={this.handleCallback}
					/>
				</header>
			</Fragment>
		);
	}
}
