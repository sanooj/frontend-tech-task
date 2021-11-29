import styled from "@emotion/styled";

const ArticleStyled = styled('div')`
	border: 1px solid lavenderblush;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > * {
		display: inline-block;
		padding: 4px 0;
		margin: 4px 0;
		width: 100%;
	}
`;

export default ArticleStyled;