import React from "react";
import "./Skills.css";

const Skills = () => {
	return (
		<div className="skills-main" id="/skills">
			<h1 className="skills-title">Skills</h1>
			<div className="skills-container" id="skills">
				<div className="skills__skill">
					<h1>React</h1>
				</div>
				<div className="skills__skill">
					<h1>JavaScript</h1>
				</div>
				<div className="skills__skill">
					<h1>HTML</h1>
				</div>
				<div className="skills__skill">
					<h1>CSS</h1>
				</div>
				<div className="skills__skill">
					<h1>Python</h1>
				</div>
				<div className="skills__skill">
					<h1>Node.js</h1>
				</div>
				<div className="skills__skill">
					<h1>GIT</h1>
				</div>
			</div>
		</div>
	);
};

export default Skills;
