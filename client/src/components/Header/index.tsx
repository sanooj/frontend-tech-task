import React from "react";

// Emotion styled component
import HeaderStyled from "./HeaderStyled";
import InputStyled from "./InputStyled";
import LogoStyled from "./LogoStyled";

/**
 * Header component
 * @returns : header html
 */
const Header = (): JSX.Element => {
	return (
		<HeaderStyled>
			<LogoStyled>home24</LogoStyled>
			<InputStyled placeholder={"Search"} data-testid="HeaderInput" />
		</HeaderStyled>
	);
};

export default Header;
