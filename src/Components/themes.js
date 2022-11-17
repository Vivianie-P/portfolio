import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#533127",
	filledColor: "#533127",
	fontText: "#2f3338",
	scrollBar: "#2f3338",
	backgroundColor: "#efdec8",
	// mobileBkgrdColor:
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#c0976f",
	filledColor: "#c0976f",
	fontText: "#f1e3cf",
	scrollBar: "#f1e3cf",
	backgroundColor: "#31353b",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

	h1  {
		color:${(props) => props.theme.fontText}
	}

	*::-webkit-scrollbar-thumb{
		background-color:${(props) => props.theme.scrollBar} 
	}


	p, h2, a, .light-dark, .header-item, .logo, .line, .hamburger{
		color:${(props) => props.theme.fontColor};
	}

	svg{
		fill:${(props) => props.theme.filledColor};
	}

	.main-header {
		background-color: ${(props) => props.theme.backgroundColor};
	}
`;
