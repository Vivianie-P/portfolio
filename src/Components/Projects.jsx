import React from "react";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects-container" id="projects">
			<h1 className="projects-title">Projects</h1>
			<Card
				title="URL Shortener App"
				description="This project is a URL shortening app that takes in the user's external URL link and shortens the link."
				img={require("./URL.jpg")}
			/>
			<Card
				title="Sunnyside Landing Page"
				description="This is a landing page with colorful and interactive elements."
				img={require("./sunnyside-lp.jpg")}
			/>
			<Card
				title="To Do App"
				description="This a To Do app that helps the user create, add, delete, and cross out to do's"
				img={require("./to-do.jpg")}
			/>
		</div>
	);
};

function Card(props) {
	return (
		<div className="card">
			<div className="card__body">
				<h2 className="card__title">{props.title}</h2>
				<p className="card__description"> {props.description}</p>
				<img className="card__image" src={props.img} alt="" />
			</div>
			<button className="card__btn">View Project</button>
		</div>
	);
}

export default Projects;
