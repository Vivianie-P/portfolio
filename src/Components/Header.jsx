import React, { useState, useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsStaggered,
	faMoon,
	faSun,
	faX,
} from "@fortawesome/free-solid-svg-icons";

const Header = React.forwardRef((props) => {
	const [showNavMenu, setShowNavMenu] = useState(false);
	const toggleNavMenu = () => setShowNavMenu(!showNavMenu);

	return (
		<div className="header-main">
			<div className="desktop-header">
				<a href="http://localhost:3000/" className="logo">
					VP
				</a>
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

			<div className="mobile-header">
				<a href="http://localhost:3000/" className="logo">
					VP
				</a>
				<button to="#" className="hamburger">
					{showNavMenu ? (
						<FontAwesomeIcon icon={faX} onClick={toggleNavMenu} />
					) : (
						<FontAwesomeIcon icon={faBarsStaggered} onClick={toggleNavMenu} />
					)}
				</button>
			</div>

			<div className={showNavMenu ? "mobile-menu-active" : "mobile-menu-inactive"}>
				<nav className="menu-items">
					<ul className="menu-items-list">
						<li className="nav-link" onClick={toggleNavMenu}>
							<button className="header-item" onClick={props.aboutClick}>
								<span>About</span>
							</button>
						</li>
						<li className="nav-link" onClick={toggleNavMenu}>
							<button className="header-item" onClick={props.projectsClick}>
								<span>Projects</span>
							</button>
						</li>
						<li className="nav-link" onClick={toggleNavMenu}>
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
