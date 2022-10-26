import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/themes.js";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [theme, setTheme] = useState("dark");
	const themeToggler = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
		console.log(theme);
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className="App">
				<div className="main">
					<Router>
						<div className="main-header">
							<h1 className="logo">VP</h1>
							<Header theme={theme} setTheme={setTheme} themeToggler={themeToggler} />
						</div>
						<Routes>
							<Route exact path="/about-me" component={<AboutMe />}></Route>
							<Route path="/projects" element={<Projects />} />
						</Routes>
					</Router>
					<Home />
					<AboutMe />
					<Skills />
					<Projects />
					<ContactMe />
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
