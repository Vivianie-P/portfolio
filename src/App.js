import "./App.css";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/themes.js";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Svg from "./Components/Svg.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor};
	color: ${(props) => props.theme.fontText};
`;

function App() {
	const [theme, setTheme] = useState("dark");
	const themeToggler = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
		console.log(theme);
	};

	const contactMeRef = useRef(null);
	const projectsRef = useRef(null);

	const handleClick = () => {
		contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledApp>
				<div className="App">
					<div className="main">
						<div className="desktop-svg">
							<Svg />
						</div>
						<div className="side-menu-right"></div>
						<Router>
							<div className="main-header">
								<a href="http://localhost:3000/" className="logo">
									VP
								</a>
								<Header theme={theme} setTheme={setTheme} themeToggler={themeToggler} />
							</div>
							<Routes>
								<Route exact path="/" element={<Home />} />
							</Routes>
						</Router>
						<div className="component-container">
							{/* <Home /> */}
							<AboutMe />
							<Projects />
							<ContactMe />
							<div className="mobile-svg">
								<Svg />
							</div>
						</div>
					</div>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
