import "./App.css";
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="main">
				<Router>
					<div className="main-header">
						<img src={require("./VP.jpg")} alt="" className="logo" />
						<Header />
					</div>
					<Routes>
						<Route path="about-me" element={<AboutMe />}></Route>
					</Routes>
				</Router>
				<AboutMe />
				<Skills />
				<Projects />
				<ContactMe />
				<Footer />
			</div>
		</div>
	);
}

export default App;
