import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e3cf",
	fontColor: "#533127",
	filledColor: "#533127",
	fontText: "#2f3338",
	scrollBar: "#2f3338",
	backgroundColor: "#ead8c0",
	projectBkgrdColor: "#c99460ba",
	projectFont: "#533127",
	cardBtn: "#311c16",
	cardTitle: "#311c16",
};

export const darkTheme = {
	body: "#2f3338",
	fontColor: "#c0976f",
	filledColor: "#c0976f",
	fontText: "#f1e3cf",
	scrollBar: "#f1e3cf",
	backgroundColor: "#292c30",
	projectBkgrdColor: "#7f5832d6",
	projectFont: "#f5debd",
	cardBtn: "#f1e3cf",
	cardTitle: "#f1e3cf",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

	// .home-title {
	// 	background:${(props) => props.theme.fontText}
	// }

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


	@media screen and (max-width: 799px) {
		.project-details {
			background-color: ${(props) => props.theme.projectBkgrdColor};
		}
	}
`;
