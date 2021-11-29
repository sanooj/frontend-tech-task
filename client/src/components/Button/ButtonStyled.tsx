import styled from "@emotion/styled";

const ButtonStyled = styled.button`
	background-color: ${props => props.theme === 'primary' ? '#f45334' : 'lightgoldenrodyellow'};
	color: ${props => props.theme === 'primary' ? '#fff' : '#000'};
	border: 1px solid lightgray;
	cursor: pointer;
	text-align: center;
    padding:4px 8px;
	transition: background-color ease-in 200ms;
	&:hover {
		background-color: ${props => props.theme === 'primary' ? '#ff2900' : 'palegoldenrod'};
	}
`;

export default ButtonStyled;