import React, { FunctionComponent, MouseEvent, useState } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

import MenuItems from "./MenuItems";

const StyledMenuIcon = styled.div<{ open: boolean; onTop: boolean }>`
  transform: rotate(${(props) => (props.open ? "45deg" : "0deg")});
  width: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
  background: ${(props) => props.theme.white};
  transition: 0.25s ease;
  position: relative;
  display: grid;
  height: 2px;
  &::before {
    width: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
    bottom: ${(props) =>
      props.open ? "0" : props.onTop ? "0.75rem" : "0.55rem"};
    background: ${(props) => props.theme.white};
    transition: 0.25s ease;
    position: absolute;
    content: "";
    height: 2px;
  }
  &::after {
    transform: rotate(${(props) => (props.open ? "90deg" : "0deg")});
    width: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
    top: ${(props) => (props.open ? "0" : props.onTop ? "0.75rem" : "0.55rem")};
    background: ${(props) => props.theme.white};
    transition: 0.25s ease;
    position: absolute;
    content: "";
    height: 2px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.a<{ onTop: boolean }>`
  height: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
  width: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
  align-items: center;
  position: relative;
  z-index: 9999;
  display: grid;
  height: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuOverlay = styled.nav<{ open: boolean }>`
  bottom: ${(props) => (props.open ? "0" : "100vh")};
  background: ${(props) => props.theme.grey};
  justify-items: center;
  transition: 0.3s ease;
  align-content: center;
  letter-spacing: 3px;
  font-size: 1.2rem;
  position: fixed;
  display: grid;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  gap: 2rem;
  right: 0;
  left: 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, auto);
    background: transparent;
    justify-items: end;
    position: relative;
    font-size: 0.75rem;
    height: auto;
    bottom: auto;
    width: auto;
    right: auto;
    left: auto;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const Menu: FunctionComponent<{ onTop: boolean }> = ({ onTop }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickMenu = (e: MouseEvent): void => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <MenuIcon role="button" href="#" onClick={handleClickMenu} onTop={onTop}>
        <StyledMenuIcon open={open} onTop={onTop} />
      </MenuIcon>
      <MenuOverlay open={open} onTop={onTop}>
        <MenuItems setOpen={setOpen} />
      </MenuOverlay>
      {open && (
        <Global
          styles={css`
            body,
            html {
              overflow: hidden;
            }
          `}
        />
      )}
    </>
  );
};

export default Menu;
