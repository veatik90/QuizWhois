import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const StyledBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStack = styled(Stack)`
  direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #00b8e5;
  box-sizing: border-box;
  height: 25px;
  :hover {
    border-bottom: 2px solid #00b8e5;
  }
`;
