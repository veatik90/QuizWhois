import styled from "styled-components/macro";

export const CategoryStyled = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid #c9c9c9;

    &:last-child {
        border-bottom: none;
    }
`;

export const CategoryTitleStyled = styled.h3`
    text-align: center;
    font-size: 24px;
`;

export const ImagesListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;
