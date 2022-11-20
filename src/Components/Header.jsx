import React, { useState, useRef } from "react";
import "./Header.css";
// import { button } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsStaggered,
	faMoon,
	faSun,
	faX,
} from "@fortawesome/free-solid-svg-icons";

const Header = React.forwardRef((props, ref) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(false);
	console.log("props: ", props);
	// console.log("ref: ", ref);
	// const handleClick = () => {
	// 	ref.current?.scrollIntoView({ behavior: "smooth" });
	// 	closeMenu();
	// };

	return (
		<div>
			<div className="desktop-header">
				<nav className="desktop-nav">
					<ul className="menu-items">
						<li className="nav-link">
							<button className="header-item" onClick={props.aboutClick}>
								<span>About</span>
							</button>
						</li>
						<li className="nav-link">
							<button className="header-item" onClick={props.projectsClick}>
								<span>Projects</span>
							</button>
						</li>
						<li className="nav-link">
							<button className="header-item" onClick={props.contactClick}>
								<span>Contact</span>
							</button>
						</li>
					</ul>
					<button className="light-dark" onClick={() => props.themeToggler()}>
						{props.theme === "light" ? (
							<FontAwesomeIcon icon={faMoon} className="light-dark" />
						) : (
							<FontAwesomeIcon icon={faSun} className="light-dark" />
						)}
					</button>
				</nav>
			</div>
			<button to="#" className="hamburger">
				{sidebar ? (
					<FontAwesomeIcon icon={faX} onClick={showSidebar} />
				) : (
					<FontAwesomeIcon icon={faBarsStaggered} onClick={showSidebar} />
				)}
			</button>
			<div className={sidebar ? "mobile-header-on" : "mobile-header-off"}>
				<nav className="menu-items">
					<ul className="menu-items-list">
						<li className="nav-link" onClick={closeMenu}>
							<button className="header-item" onClick={props.aboutClick}>
								<span>About</span>
							</button>
						</li>
						<li className="nav-link" onClick={closeMenu}>
							<button className="header-item" onClick={props.projectsClick}>
								<span>Projects</span>
							</button>
						</li>
						<li className="nav-link" onClick={closeMenu}>
							<button className="header-item" onClick={props.contactClick}>
								<span>Contact</span>
							</button>
						</li>
					</ul>
					<button className="light-dark" onClick={() => props.themeToggler()}>
						{props.theme === "light" ? (
							<FontAwesomeIcon icon={faMoon} className="light-dark" />
						) : (
							<FontAwesomeIcon icon={faSun} className="light-dark" />
						)}
					</button>
				</nav>
			</div>
		</div>
	);
});

export default Header;
