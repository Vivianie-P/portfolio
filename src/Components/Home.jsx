import React from "react";
import "./Home.css";

const Home = (props) => {
	return (
		<div className="home-main" id="/">
			<h1
				className={props.currTheme === "dark" ? "home-title" : "home-title-light"}
			>
				Hello, I'm <br /> Vivianie Price
			</h1>
			<div className="underline"></div>
			<p className="home-ppg">
				I'm an aspiring frontend software engineer specializing in building websites
				and applications. Learn more about me below.
			</p>
		</div>
	);
};

export default Home;
