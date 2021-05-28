import React, { Component, Fragment } from "react";
import Elin from "../img/elin.jpg";

export default class About extends Component {
	render() {
		return (
			<Fragment>
				<main id="about">
					<h1 className="lg-heading">
						Om <span className="text-secondary">mig</span>
					</h1>
					<div className="about-info">
						<img src={Elin} alt="Elin Larsson" className="bio-image" />
						<div className="bio">
							<h2 className="text-secondary">Biografi</h2>
							<p className="bio-text">
								Elin Larsson, junior webbutvecklare med fokus på frontend.
								Brinner mest för utveckling i React, men har erfarenhet från
								flera språk & tekniker.
								<br />
								Är även legitimerad apotekare. På fritiden tycker jag om att gå
								på bio, löpträna, spela tv-spel och simma.
							</p>
						</div>
						<h3 className="education-header">Utbildning</h3>
					</div>
					<div id="output"></div>
				</main>
			</Fragment>
		);
	}
}
