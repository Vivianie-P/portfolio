import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const home = () => {
	return (
		<div className="home-main" id="/">
			<h1 className="home-title">
				Hello I'm <br /> Vivianie Price
			</h1>
			<FontAwesomeIcon icon={faMinus} className="home-icon" />
			<p className="home-ppg">
				I'm an aspiring frontend software engineer specializing in building websites
				and applications. Learn more about me below.
			</p>
		</div>
	);
};

export default home;
