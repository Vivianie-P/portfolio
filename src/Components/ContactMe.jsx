import React from "react";
import "./ContactMe.css";

function ContactMe() {
	return (
		<div className="contact-me-container">
			<h1 className="contact-me-title">Let's network</h1>
			<div className="inner-container">
				<h1 className="subtitle">Want to work together or have any questions?</h1>
				<a className="mailto" id="contact-me" href="mailto:vivianieprice@gmail.com">
					Contact Me
				</a>
			</div>
		</div>
	);
}

export default ContactMe;
