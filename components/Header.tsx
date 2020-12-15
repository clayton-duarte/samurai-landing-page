import React, { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "@emotion/styled";

import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  height: 2.5rem;
`;

const StyledMenuIcon = styled(AiOutlineMenu)`
  font-size: 2rem;
  color: #fff;
`;

const StyledTitle = styled.h1`
  font-size: 1.25rem;
  color: #fff;
`;

const StyledHeader = styled.header`
  grid-template-columns: auto 1fr auto;
  align-items: center;
  position: absolute;
  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  right: 0;
  left: 0;
  top: 0;
`;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledTitle>DilsonSamurai</StyledTitle>
      <StyledMenuIcon />
    </StyledHeader>
  );
};

export default Header;
