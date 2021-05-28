import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	state = {
		isVisible: false,
	};
	changeState = () => {
		this.setState((prevState) => ({
			isVisible: !prevState.isVisible,
		}));
	};
	onTrigger = (event) => {
		this.props.parentCallback(false);
		event.preventDefault();
	};

	render() {
		return (
			<Fragment>
				<nav className={`menu ${this.props.visibility ? "show" : ""}`}>
					<div
						className={`menu-branding ${this.props.visibility ? "show" : ""}`}
					>
						<div className="portrait"></div>
					</div>
					<ul className={`menu-nav ${this.props.visibility ? "show" : ""}`}>
						<li className="nav-item" onClick={this.onTrigger}>
							<Link to="/" className="nav-link">
								Hem
							</Link>
						</li>
						<li className="nav-item" onClick={this.onTrigger}>
							<Link to="/about" className="nav-link">
								Om mig
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Arbete
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Projekt
							</Link>
						</li>
					</ul>
				</nav>
			</Fragment>
		);
	}
}
