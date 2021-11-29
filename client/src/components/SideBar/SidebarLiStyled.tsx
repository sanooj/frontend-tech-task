import styled from "@emotion/styled";

const SidebarLiStyled = styled('li')`
	margin: 0 0 0 8px;
	padding: 4px 0;
	& > a {
		text-decoration: none;
		font-size: 13px;
   		display: inline-block;
		transition: transform ease-in 200ms;
		&:hover {
			transform: translateX(3px);
		}
	}
`;

export default SidebarLiStyled;