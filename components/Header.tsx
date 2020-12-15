import React, { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "@emotion/styled";

import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  height: 2.5rem;
`;

const StyledIcon = styled(AiOutlineMenu)`
  font-size: 2rem;
  color: #fff;
`;

const StyledHeader = styled.header`
  grid-template-columns: 1fr auto;
  align-items: center;
  display: grid;
  padding: 1rem;
  gap: 1rem;
`;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledIcon />
    </StyledHeader>
  );
};

export default Header;
