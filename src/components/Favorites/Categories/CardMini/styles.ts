import styled from "styled-components/macro";

export const ImageCardMiniStyled = styled.img`
    object-fit: cover;
    height: 104px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    
    &:nth-child(3n) {
        margin-right: 0;
    }
`;