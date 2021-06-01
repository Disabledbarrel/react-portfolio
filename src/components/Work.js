import React, { Component, Fragment } from "react";

export default class Work extends Component {
	state = {
		jobs: [],
	};
	async componentDidMount() {
		const apiUrl =
			"https://studenter.miun.se/~ella1800/dt173g/projekt_api/api/api/work/read.php";
		const jobRes = await fetch(apiUrl).then((res) => res.json());
		const jobs = jobRes.data;
		this.setState({ jobs });
	}

	render() {
		const { jobs } = this.state;
		return (
			<Fragment>
				<main id="work">
					<h1 className="lg-heading">
						Mina <span className="text-secondary">arbeten</span>
					</h1>
					<h2 className="sm-heading">
						Nedan radar jag upp några av mina erfarenheter från arbetslivet.
					</h2>
					<div id="output2">
						{jobs.map((job) => {
							const { id, title, workplace, description, startdate, stopdate } =
								job;
							return (
								<div className="job" key={id}>
									<h4>Befattning: {title}</h4>
									<h5>Arbetsplats: {workplace}</h5>
									<p>{description}</p>
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
