import React from "react";
import "./ContactMe.css";

function ContactMe() {
	return (
		<div className="contact-me-container" id="contact-me">
			<h1 className="contact-me-title">Let's network</h1>
			<div className="inner-container">
				<p className="subtitle">
					Want to work together or have any questions? Feel free to click the button
					below.
				</p>
				<a className="mailto" id="contact-me" href="mailto:vivianieprice@gmail.com">
					Say Hello
				</a>
			</div>
		</div>
	);
}

export default ContactMe;
