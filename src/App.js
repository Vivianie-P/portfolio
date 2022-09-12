import "./App.css";
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import ContactMe from "./Components/ContactMe.jsx";

function App() {
	return (
		<div className="App">
			<div className="main">
				<Header />
				<AboutMe />
				<Projects />
				<Skills />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
