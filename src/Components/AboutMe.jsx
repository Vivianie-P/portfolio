import React from "react";
import "./AboutMe.css";

function AboutMe() {
	return (
		<div className="aboutme-main" id="/about-me">
			<h1 className="aboutme-title">About Me</h1>
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
			<div className="skills-main" id="/skills">
				<h1 className="skills-title">Skills</h1>
				<div className="skills-container" id="skills">
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
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
