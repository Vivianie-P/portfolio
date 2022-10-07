import "./App.css";
import { useRef } from "react";
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
	const aboutme = useRef(null);
	const skills = useRef(null);
	const projects = useRef(null);
	const contactme = useRef(null);
	const footer = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<div className="App">
			<div className="main">
				<Router>
					<div className="main-header">
						<h1 className="logo">VP</h1>
						<Header />
					</div>
					<Routes>
						<Route exact path="/about-me" component={<AboutMe />}></Route>
						<Route
							onClick={() => scrollToSection(skills)}
							path="/skills"
							component={<Skills />}
						></Route>
						<Route
							onClick={() => scrollToSection(projects)}
							path="/projects"
							component={<Projects />}
						></Route>
						<Route path="/contact-me" component={<ContactMe />}></Route>
					</Routes>
				</Router>
				<AboutMe />
				<Skills ref={skills} />
				<Projects ref={projects} />
				<ContactMe />
				<Footer />
			</div>
		</div>
	);
}

export default App;
