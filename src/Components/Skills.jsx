import React from "react";
import "./Skills.css";

const Skills = () => {
	return (
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
	);
};

export default Skills;
