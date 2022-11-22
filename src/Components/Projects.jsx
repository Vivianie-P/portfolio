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
					title="URL Shortener App"
					description="This project is a URL shortening app that takes in the user's external URL link and shortens the link. The tech stack used to complete this project were JavaScript, CSS, & React.
					"
					img={require("./URL.jpg")}
					gitLink="https://github.com/Vivianie-P/URL-Project"
				/>

				<Card
					title="Sunnyside Landing Page"
					description="This is a colorful landing page with and interactive elements."
					img={require("./sunnyside-lp.jpg")}
					gitLink="https://github.com/Vivianie-P/sunnyside-lp"
				/>

				<Card
					title="To Do App"
					description="This a To Do app that helps the user create, add, delete, and cross out to do's."
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
				<h2 className="card__title">{props.title}</h2>
				<img className="card__image__mobile" src={props.img} alt="" />
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
			<img className="card__image" src={props.img} alt="" />
		</div>
	);
}

export default Projects;
