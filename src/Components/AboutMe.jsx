import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
	return (
		<div className="aboutme-main">
			<h1
				className={
					props.currTheme === "dark" ? "aboutme-title" : "aboutme-title-light"
				}
			>
				About
			</h1>
			<div className="underline"></div>
			<p className="aboutme-ppg">
				My interest in web devlopment started back in 2020 after graduating in the
				middle of the pandemic. The job market for psychology majors weren't very
				abundant due to the climate of the world. As a result, I wanted to learn a
				new skill that would be challenging and engaging.
			</p>
			<p className="aboutme-ppg">
				{" "}
				Intially I learned Python from there I learned HTML and CSS. At that point I
				learned that frontend devlopment was what I enjoyed the most. In my recent
				projects React was my framework of choice in conjuction with Javascript, CSS
				and Node.js.
			</p>
			<h2 className="skills-title">Here are a few of my skills:</h2>
			<div className="skills-container">
				<div className="skills__skill">
					<h2>React</h2>
				</div>
				<div className="skills__skill">
					<h2>JavaScript</h2>
				</div>
				<div className="skills__skill">
					<h2>HTML</h2>
				</div>
				<div className="skills__skill">
					<h2>CSS</h2>
				</div>
				<div className="skills__skill">
					<h2>Python</h2>
				</div>
				<div className="skills__skill">
					<h2>Node.js</h2>
				</div>
				<div className="skills__skill">
					<h2>GIT</h2>
				</div>
				<div className="skills__skill">
					<h2>Typescript</h2>
				</div>
				<div className="skills__skill">
					<h2>Tailwind CSS</h2>
				</div>
				<div className="skills__skill">
					<h2>Vite</h2>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
