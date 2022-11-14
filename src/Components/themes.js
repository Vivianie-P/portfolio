import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#533127",
	fontText: "#2f3338",
	backgroundColor: "#efdec8",
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#c0976f",
	fontText: "#f1e3cf",
	backgroundColor: "#31353b",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

	h1, a {
		color:${(props) => props.theme.fontText}
	}


	p, h2 {
		color:${(props) => props.theme.fontColor};
	}

	.main-header{
		background-color: ${(props) => props.theme.backgroundColor};
	}
`;
