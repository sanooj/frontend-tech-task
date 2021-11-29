import React from "react";
import { Category } from "types/types";

// Emotions Styled component
import SidebarLiStyled from "./SidebarLiStyled";
import SidebarStyled from "./SidebarStyled";
import SidebarUlStyled from "./SidebarUlStyled";


/**
 * Side bar component
 * @param param : Product categories
 * @returns : JSX Element
 */
const SideBar = ({ categories }: { categories: Category[] }): JSX.Element => {
	return (
		<SidebarStyled>
			<h3>Kategorien</h3>
			{categories && categories.length ? (
				<SidebarUlStyled>
					{categories[0].childrenCategories.map(({ name, urlPath }, index) => (
							<SidebarLiStyled key={index}>
								<a href={`/${urlPath}`} data-testid="sideLink">{name}</a>
							</SidebarLiStyled>
						)
					)}
				</SidebarUlStyled>
			) : (
				"Loading..."
			)}
		</SidebarStyled>
	);
};

export default SideBar;
