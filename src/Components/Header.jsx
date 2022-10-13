import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsStaggered,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(false);

	return (
		<div>
			<div className="desktop-header">
				<nav className="desktop-nav">
					<ul className="menu-items">
						{HeaderData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path} onClick={closeMenu}>
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<Link to="#" className="hamburger">
				<FontAwesomeIcon icon={faBarsStaggered} onClick={showSidebar} />
			</Link>
			<div className={sidebar ? "mobile-header-on" : "mobile-header-off"}>
				<nav className="menu-items">
					<ul className="menu-items-list">
						{HeaderData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path} onClick={closeMenu}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
