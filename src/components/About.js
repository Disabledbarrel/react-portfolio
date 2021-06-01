import React, { Component, Fragment } from "react";
import Elin from "../img/elin.jpg";

export default class About extends Component {
	state = {
		educations: [],
	};

	async componentDidMount() {
		const apiUrl =
			"https://studenter.miun.se/~ella1800/dt173g/projekt_api/api/api/education/read.php";
		const eduRes = await fetch(apiUrl).then((res) => res.json());
		const educations = eduRes.data;
		this.setState({
			educations,
		});
	}

	render() {
		const { educations } = this.state;
		return (
			<Fragment>
				<main id="about">
					<h1 className="lg-heading">
						Om <span className="text-secondary">mig</span>
					</h1>
					<div className="about-info">
						<img src={Elin} alt="Elin Larsson" className="bio-image" />
						<div className="bio bio-text">
							<p>
								Mitt namn är Elin Larsson och jag är junior webbutvecklare med
								fokus på frontend. Jag brinner mest för utveckling i React, men
								har erfarenhet från flera språk och tekniker.
							</p>
							<p>
								Jag är även legitimerad apotekare. På fritiden tycker jag om att
								gå på bio, löpträna, spela tv-spel och simma.
							</p>
						</div>
						<h3 className="text-secondary">Utbildning</h3>
					</div>
					<div id="output">
						{educations.map((singleEd) => {
							const { id, course, school, startdate, stopdate } = singleEd;
							return (
								<div className="job" key={id}>
									<h4>{course}</h4>
									<h5>Lärosäte: {school}</h5>
									<p>Start: {startdate}</p>
									<p>Slut: {stopdate}</p>
								</div>
							);
						})}
					</div>
				</main>
			</Fragment>
		);
	}
}
