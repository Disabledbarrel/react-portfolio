import React, { Component, Fragment } from "react";

export default class Projects extends Component {
	state = {
		projects: [],
	};

	async componentDidMount() {
		const apiUrl =
			"http://studenter.miun.se/~ella1800/dt173g/projekt_api/api/api/project/read.php";
		const projectRes = await fetch(apiUrl).then((res) => res.json());
		const projects = projectRes.data;
		this.setState({
			projects,
		});
	}
	render() {
		const { projects } = this.state;
		return (
			<Fragment>
				<main id="work">
					<h1 className="lg-heading">
						Mina <span className="text-secondary">projekt</span>
					</h1>
					<h2 className="sm-heading">
						Nedan radar jag upp några av mina projekt i webbutveckling.
					</h2>
					<div id="projects">
						{projects.map((p) => {
							const { id, url, image, title, description } = p;
							return (
								<div className="item" key={id}>
									<a href={url}>
										<img src={image} alt="project" />
									</a>
									<div className="item-text">
										<h3>{title}</h3>
										<p>{description}</p>
										<a href={url} className="project_link">
											Till projektet{" "}
											<i className="fas fa-external-link-alt"></i>
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</main>
			</Fragment>
		);
	}
}
