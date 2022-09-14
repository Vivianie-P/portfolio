import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="header">
				<h2 className="header-title">Vivianie Price</h2>
				<nav className="desktop-header">
					<ul className="menu-items">
						{HeaderData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<Link to="#" className="hamburger">
					<FontAwesomeIcon icon={faBars} onClick={showSidebar} />
				</Link>
			</div>
			<div className="header-container">
				<nav className={sidebar ? "menu-items active" : "menu-items"}>
					<ul className="menu-items">
						{HeaderData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Header;
