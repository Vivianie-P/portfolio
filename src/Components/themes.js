import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const lightTheme = {
	body: "#f1e8db",
	fontColor: "#000",
};

export const darkTheme = {
	body: "#000",
	fontColor: "#f1e8db",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
