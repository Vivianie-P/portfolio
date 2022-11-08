import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#477ba8",
	fontText: "#262727",
};

export const darkTheme = {
	body: "#262727",
	fontColor: "#477ba8",
	fontText: "#f1e3cf",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
