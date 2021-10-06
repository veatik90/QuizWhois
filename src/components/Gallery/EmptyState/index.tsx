import { FC } from "react";
import { StyledEmptyState } from "./styles";

export const EmptyState: FC = () => {
  return (
    <StyledEmptyState>
      <p>your gallery is empty</p>
    </StyledEmptyState>
  );
};
