import React, { Component, Fragment } from "react";

export default class NavBar extends Component {
	render() {
		state = {
			isVisible: this.props.visibility,
		};
		return (
			<Fragment>
				<nav className={`menu ${this.props.visibility ? "show" : ""}`}>
					<div
						className={`menu-branding ${this.props.visibility ? "show" : ""}`}
					>
						<div className="portrait"></div>
					</div>
					<ul className={`menu-nav ${this.props.visibility ? "show" : ""}`}>
						<li className="nav-item current">
							<a href="index.html" className="nav-link">
								Hem
							</a>
						</li>
						<li className="nav-item">
							<a href="about.html" className="nav-link">
								Om mig
							</a>
						</li>
						<li className="nav-item">
							<a href="work.html" className="nav-link">
								Arbete
							</a>
						</li>
						<li className="nav-item">
							<a href="project.html" className="nav-link">
								Projekt
							</a>
						</li>
					</ul>
				</nav>
			</Fragment>
		);
	}
}
