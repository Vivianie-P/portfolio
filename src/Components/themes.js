import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#7d5448",
	fontText: "#2f3338",
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#7d5448",
	fontText: "#f1e3cf",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

	h1 {
		color:${(props) => props.theme.fontText}
	}

	a {
		color:${(props) => props.theme.fontText}
	}

	p {
		color:${(props) => props.theme.fontColor};
	}
`;
