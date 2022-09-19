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
		<div>
			<div className="desktop-header">
				<nav className="desktop-nav">
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
			<div className="hamburger">
				<FontAwesomeIcon icon={faBars} onClick={showSidebar} />
			</div>
			<div className="mobile-header">
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
		</div>
	);
};

export default Header;
