import React, { Component, Fragment } from "react";

export default class Main extends Component {
	render() {
		return (
			<Fragment>
				<main id="home">
					<h1 className="lg-heading">
						Elin <span className="text-secondary">Larsson</span>
					</h1>
					<h2 className="sm-heading" id="main-heading">
						Webbutvecklare, Apotekare, Filmnörd & Casual gamer
					</h2>
					<div className="icons">
						<a
							href="https://se.linkedin.com/in/elin-larsson-38576456?trk=people-guest_people_search-card"
							target="_blank"
							className="icon-link"
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://github.com/Disabledbarrel"
							target="_blank"
							className="icon-link"
						>
							<i className="fab fa-github"></i>
						</a>
					</div>
				</main>
			</Fragment>
		);
	}
}
