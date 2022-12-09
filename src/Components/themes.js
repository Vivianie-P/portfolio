import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#533127",
	filledColor: "#533127",
	fontText: "#2f3338",
	scrollBar: "#2f3338",
	backgroundColor: "#f1e3cf",
	projectBkgrdColor: "#c99460ba",
	projectFont: "#2f3338",
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#c0976f",
	filledColor: "#c0976f",
	fontText: "#f1e3cf",
	scrollBar: "#f1e3cf",
	backgroundColor: "#2f3338",
	projectBkgrdColor: "#7f5832d6",
	projectFont: "#ffe1b7",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

	h1 {
		color:${(props) => props.theme.fontText}
	}

	*::-webkit-scrollbar-thumb{
		background-color:${(props) => props.theme.scrollBar} 
	}

	h2, p, a, .light-dark, .header-item, .logo, .line, .hamburger{
		color:${(props) => props.theme.fontColor};
	}

	svg{
		fill:${(props) => props.theme.filledColor};
	}

	.mobile-header, .desktop-header, .menu-items {
		background-color: ${(props) => props.theme.backgroundColor};
	}

	.project-details {
		background-color: ${(props) => props.theme.projectBkgrdColor};
	}

	.card__title, .card__description, .card__btn{
		color:${(props) => props.theme.projectFont};
	}
`;
