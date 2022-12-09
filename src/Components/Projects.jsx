import React from "react";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects-main" id="projects">
			<div className="projects-title-container">
				<h1 className="projects-title">Projects</h1>
			</div>
			<div className="projects-container">
				<Card
					title="Shortly"
					description="Shortly is a URL shortening app that takes in the user's external URL link and shortens the link. It allows the user to delete old URL links and keep the ones they would like. "
					img={require("./URL.jpg")}
					gitLink="https://github.com/Vivianie-P/URL-Project"
				/>

				<Card
					title="Sunnyside Landing Page"
					description="This is a landing page for a full-service creative agency that specializes in helping brands grow. I created this website using the frontend tools I know."
					img={require("./sunnyside-lp.jpg")}
					gitLink="https://github.com/Vivianie-P/sunnyside-lp"
				/>

				<Card
					title="To Do App"
					description="This a To Do app that helps with creating, adding, deleting, and crossing out to do's. Anyone can use this app to stay on track of their tasks.  "
					img={require("./to-do.jpg")}
					gitLink="https://github.com/Vivianie-P/to-do-app"
				/>
			</div>
		</div>
	);
};

function Card(props) {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener, noreferrer");
	};
	return (
		<div className="card">
			<div className="card-inner-info">
				<img className="card__image__mobile" src={props.img} alt="" />
				<div className="project-details">
					<h2 className="card__title">{props.title}</h2>
					<p className="card__description"> {props.description}</p>
					<a
						href={props.gitLink}
						className="card__btn"
						target="_blank"
						rel="noopener noreferrer"
					>
						Link to GitHub
					</a>
				</div>
			</div>
			<div className="image-container">
				<img className="card__image" src={props.img} alt="" />
			</div>
		</div>
	);
}

export default Projects;
