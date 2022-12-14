import React from "react";
import "./ContactMe.css";

function ContactMe(props) {
	return (
		<div className="contact-me-container" id="contact-me">
			<h1
				className={
					props.currTheme === "dark" ? "contact-me-title" : "contact-me-title-light"
				}
			>
				Let's network
			</h1>
			<div className="underline"></div>
			<div className="inner-container">
				<p className="subtitle">
					Want to work together or have any questions? Feel free to click the button
					below.
				</p>
				<a className="mailto" id="contact-me" href="mailto:vivianieprice@gmail.com">
					Say Hello
				</a>
			</div>
			<div className="desktop-sentence-container">
				<h2 className="desktop-sentence">
					Designed and Built by <br></br> Vivianie Price
				</h2>
			</div>
		</div>
	);
}

export default ContactMe;
