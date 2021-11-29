import React from "react";

// Emotions Styled component
import ButtonStyled from "./ButtonStyled";

/**
 * Button component
 * @param param: children, label for button and button variant 
 * @returns : JSX Element
 */
const Button = ({children,label,variant}: {children?: JSX.Element;label: string;variant?: string}): JSX.Element => {
	return (
		<ButtonStyled theme={variant} data-testid="addToCartButton">
			{children}{label}
		</ButtonStyled>
	);
};

export default Button;
