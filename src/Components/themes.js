import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#f1e8db",
	fontColor: "#477ba8",
	titleColor: "000",
};

export const darkTheme = {
	body: "#000",
	fontColor: "#477ba8",
	titleColor: "#f1e8db",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
