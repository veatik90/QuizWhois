import { Typography } from "@mui/material";
import { FC } from "react";
import { StyledBox, StyledNavLink, StyledStack } from "./styles";
import image from "./assets/NotFoundImage.png";

export const NotFound: FC = () => (
  <StyledBox>
    <StyledStack>
      <img src={image} alt="telescope" />
      <Typography>404 | Page not found</Typography>
      <StyledNavLink to="/">home</StyledNavLink>
    </StyledStack>
  </StyledBox>
);
