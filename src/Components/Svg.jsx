import React from "react";
import resume from "./Resume.PDF";
// import { FiGithub } from "react-icons/fi";
import "./Svg.css";

const Footer = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener, noreferrer");
	};

	return (
		<div className="svg-main">
			<div className="svg-container">
				<a href={resume} target="__blank">
					<svg
						className="cv-svg"
						// fill="#b46a55"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 80 80"
					>
						<path d="M12 7v66a2 2 0 0 0 2 2h52a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2zm4 2h48v62H16V9z" />
						<path d="M32.769 31c2.169 0 4.255-.945 5.724-2.593a2 2 0 1 0-2.986-2.66c-.72.808-1.693 1.253-2.738 1.253C30.691 27 29 25.206 29 23s1.69-4 3.769-4c1.045 0 2.017.445 2.738 1.254a2 2 0 0 0 2.986-2.661C37.024 15.945 34.938 15 32.77 15 28.485 15 25 18.589 25 23s3.485 8 7.769 8zm13.385-1.231a2 2 0 0 0 3.692 0l5-12a2 2 0 1 0-3.692-1.538L48 23.8l-3.154-7.569a2 2 0 1 0-3.692 1.538l5 12zM59 39H21a2 2 0 0 0 0 4h38a2 2 0 0 0 0-4zm0 11H21a2 2 0 0 0 0 4h38a2 2 0 0 0 0-4zm0 11H21a2 2 0 0 0 0 4h38a2 2 0 0 0 0-4z" />
					</svg>
				</a>
				<a>
					<svg
						className="github-svg"
						onClick={() => openInNewTab("https://github.com/Vivianie-P")}
						// fill="#b46a55"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
					>
						<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
					</svg>
				</a>
				<a>
					<svg
						className="linkedin-svg"
						onClick={() =>
							openInNewTab("https://www.linkedin.com/in/vivianie-price-889802138/")
						}
						// fill="#b46a55"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 120 96"
					>
						<path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z" />
					</svg>
				</a>
			</div>
			<div className="line"></div>
		</div>
	);
};

export default Footer;
