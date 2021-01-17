import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "@emotion/styled";

import Menu from "./Menu";
import Section from "./Section";
import Logo from "./Logo";

const StyledLogo = styled(Logo)<{ onTop: boolean }>`
  fill: ${(props) => (props.onTop ? props.theme.red : props.theme.white)};
  height: ${(props) => (props.onTop ? "2.5rem" : "2rem")};
  transition: 0.25s ease;
`;

const StyledTitle = styled.h1<{ onTop: boolean }>`
  transform: scale(${(props) => (props.onTop ? 1 : 0.5)});
  opacity: ${(props) => (props.onTop ? 1 : 0)};
  color: ${(props) => props.theme.white};
  transform-origin: left;
  transition: 0.25s ease;
  letter-spacing: 2px;
  font-size: 1.25rem;
`;

const StyledHeader = styled.header<{ onTop: boolean }>`
  box-shadow: ${(props) => (props.onTop ? "0 0 0 #0000" : props.theme.shadow)};
  background: ${(props) => (props.onTop ? "transparent" : props.theme.grey)};
  transition: 0.25s ease;
  position: fixed;
  display: grid;
  z-index: 999;
  gap: 0.5rem;
  right: 0;
  left: 0;
  top: 0;
`;

const StyledContainer = styled(Section)`
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Header: FunctionComponent = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY < 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader onTop={isOnTop}>
      <StyledContainer>
        <StyledLogo onTop={isOnTop} />
        <StyledTitle onTop={isOnTop}>DilsonSamurai</StyledTitle>
        <Menu onTop={isOnTop} />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
