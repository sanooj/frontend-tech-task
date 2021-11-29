import React from "react";

// Emotions Styled component
import FooterStyled from "./FooterStyled";


/**
 * Footer Component
 * @returns : JSX Element
 */
const Footer = (): JSX.Element => {
	return (
		<FooterStyled data-testid="footer">
			Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
			Versandkosten.
		</FooterStyled>
	);
};

export default Footer;
