import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#533127",
	filledColor: "#533127",
	scrollBar: "#2f3338",
	backgroundColor: "#ead8c0",
	projectBkgrdColor: "#c99460ba",
	projectFont: "#533127",
	cardBtn: "#802d16",
	cardTitle: "#311c16",
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#c0976f",
	filledColor: "#c0976f",
	scrollBar: "#f1e3cf",
	backgroundColor: "#292c30",
	projectBkgrdColor: "#7f5832d6",
	projectFont: "#f5debd",
	cardBtn: "#c08e47",
	cardTitle: "#f1e3cf",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
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

	.card__title{
		color:${(props) => props.theme.cardTitle};
	}

	.card__description{
		color:${(props) => props.theme.projectFont};
	}

	.card__btn{
		fill:${(props) => props.theme.cardBtn};
	}

	@media screen and (max-width: 950px) {
		.project-details {
			background-color: ${(props) => props.theme.projectBkgrdColor};
		}
	}

	@media screen and (max-width: 1000px) and (orientation: landscape) {
		.project-details {
			background-color: ${(props) => props.theme.projectBkgrdColor};
		}
	}
`;
