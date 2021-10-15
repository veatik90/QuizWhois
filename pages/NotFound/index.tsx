import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { StyledBox, StyledStack } from "./styles";
import NotFoundImage from "./assets/NotFoundImage.png";
import { NavLink } from "react-router-dom";

export const NotFound: FC = () => (
  <StyledBox>
    <StyledStack spacing={2}>
      <img src={NotFoundImage} alt="telescope" />
      <Typography>404 | Page not found</Typography>
      <Button
        component={NavLink}
        to="/"
        variant="outlined"
        color="primary"
        size="large"
      >
        home
      </Button>
    </StyledStack>
  </StyledBox>
);
