import "./App.css";
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="main">
				<div className="main-header">
					<Router>
						<Header />
						<Routes>
							<Route path="/" />
						</Routes>
					</Router>
				</div>
				<AboutMe />
				<Projects />
				<Skills />
				<ContactMe />
				<Footer />
			</div>
		</div>
	);
}

export default App;
