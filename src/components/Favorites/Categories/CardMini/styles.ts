import styled from "styled-components"

export const ImageStyled = styled.img`
    object-fit: cover;
    height: 104px;
    width: 162px;
    margin: 0 15px 15px 0;
    border-radius: 5px;
    cursor: pointer;
    
    &:nth-child(3n) {
        margin-right: 0;
    }
`;