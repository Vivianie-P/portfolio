import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/themes.js";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor};
	color: ${(props) => props.theme.fontText};
`;

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const themeToggler = () => {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		}
	};

	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
	const introRef = useRef(null);

	const handleClick = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const themeBackgroundColors = {
			light: "#ead8c0",
			dark: "#292c30",
		};

		localStorage.setItem("theme", theme);
		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute("content", themeBackgroundColors[theme]);
	});

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledApp>
				<div className="App">
					<div className="header-container">
						<Header
							theme={theme}
							setTheme={setTheme}
							themeToggler={themeToggler}
							aboutClick={() => handleClick(aboutRef)}
							projectsClick={() => handleClick(projectsRef)}
							contactClick={() => handleClick(contactRef)}
							logoClick={() => handleClick(introRef)}
						/>
					</div>
					<div className="main">
						<div className="desktop-footer">
							<Footer />
						</div>
						<div className="right-side-menu">
							<a className="secondary-mailto" href="mailto:vivianieprice@gmail.com">
								vivianieprice@gmail.com
							</a>
							<div className="line"></div>
						</div>

						<div className="component-container">
							<div ref={introRef}>
								<Home currTheme={theme} />
							</div>
							<div ref={aboutRef}>
								<AboutMe currTheme={theme} />
							</div>
							<div ref={projectsRef}>
								<Projects currTheme={theme} />
							</div>
							<div ref={contactRef}>
								<ContactMe currTheme={theme} />
							</div>
						</div>
					</div>
					<div className="mobile-footer">
						<Footer />
					</div>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
