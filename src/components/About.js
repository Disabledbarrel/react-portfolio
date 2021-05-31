import React, { Component, Fragment } from "react";
import Elin from "../img/elin.jpg";

export default class About extends Component {
	state = {
		isLoading: true,
		educations: [],
	};
	getEducation() {
		const apiUrl =
			"http://studenter.miun.se/~ella1800/dt173g/projekt_api/api/api/education/read.php";
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					educations: data,
					isLoading: false,
				})
			);
	}
	componentDidMount() {
		this.getEducation();
	}

	render() {
		const { isLoading, educations } = this.state;
		const education = educations.data;
		return (
			<Fragment>
				<main id="about">
					<div className="about-info">
						<img src={Elin} alt="Elin Larsson" className="bio-image" />
						<div className="bio">
							<h1 className="lg-heading">
								Om <span className="text-secondary">mig</span>
							</h1>
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
					<div id="output">
						{!isLoading ? (
							education.map((singleEd) => {
								const { id, course, school, startdate, stopdate } = singleEd;
								return (
									<div className="job" key={id}>
										<h4>{course}</h4>
										<h5>Lärosäte: {school}</h5>
										<p>Start: {startdate}</p>
										<p>Slut: {stopdate}</p>
									</div>
								);
							})
						) : (
							<h3>Loading...</h3>
						)}
					</div>
				</main>
			</Fragment>
		);
	}
}
