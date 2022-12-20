import React from "react";
import "./Projects.css";

const Projects = (props) => {
	return (
		<div className="projects-main" id="projects">
			<div className="projects-title-container">
				<h1
					className={
						props.currTheme === "dark" ? "projects-title" : "projects-title-light"
					}
				>
					Projects
				</h1>
			</div>
			<div className="underline"></div>
			<div className="projects-container">
				<Card
					title="Shortly"
					description="Shortly is a URL shortening app that takes in the user's external URL link and shortens the link. It allows the user to delete old URL links and keep the ones they would like. "
					img={require("./URL.jpg")}
					gitLink="https://github.com/Vivianie-P/URL-Project"
				/>

				<Card
					title="Sunnyside"
					description="Sunnyside is a landing page for a full-service creative agency that specializes in helping brands grow. I created this website using the frontend tools I know."
					img={require("./sunnyside-lp.jpg")}
					gitLink="https://github.com/Vivianie-P/sunnyside-lp"
				/>

				<Card
					title="To Do App"
					description="This is a To Do app that helps with creating, adding, deleting, and crossing out to do's. Anyone can use this app to stay on track of their tasks.  "
					img={require("./to-do.jpg")}
					gitLink="https://github.com/Vivianie-P/to-do-app"
				/>
			</div>
		</div>
	);
};

function Card(props) {
	return (
		<div className="card">
			<div className="card-inner-info">
				<div className="mobile-card-image-container">
					<img className="card__image__mobile" src={props.img} alt="" />
				</div>
				<div className="project-details">
					<h2 className="card__title">
						{props.title}{" "}
						<a
							href={props.gitLink}
							className="card__btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								className="card__btn"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								target="_blank"
								rel="noopener noreferrer"
							>
								<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
							</svg>
						</a>
					</h2>

					<p className="card__description"> {props.description}</p>
				</div>
			</div>
			<div className="image-container">
				<img className="card__image" src={props.img} alt="" />
			</div>
		</div>
	);
}

export default Projects;
