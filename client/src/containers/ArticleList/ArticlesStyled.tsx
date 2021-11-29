import styled from "@emotion/styled";

const ArticlesStyled = styled.div`
display: grid;
grid-gap: 26px;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
& > * {
    display: inline-block;
    padding: 4px 0;
    margin: 4px 0;
    width: 100%;
}
`;

export default ArticlesStyled;