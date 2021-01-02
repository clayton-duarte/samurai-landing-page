import React, { FunctionComponent, MouseEvent, useState } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

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
`;

const MenuIcon = styled.a<{ onTop: boolean }>`
  height: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
  width: ${(props) => (props.onTop ? "2rem" : "1.75rem")};
  align-items: center;
  position: relative;
  z-index: 9999;
  display: grid;
  height: 2rem;
`;

const MenuOverlay = styled.nav<{ open: boolean }>`
  bottom: ${(props) => (props.open ? "0" : "100vh")};
  background: ${(props) => props.theme.grey};
  justify-items: center;
  transition: 0.3s ease;
  align-content: center;
  letter-spacing: 3px;
  position: fixed;
  display: grid;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  gap: 2rem;
  right: 0;
  left: 0;
`;

const MenuItem = styled.a`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  transition: 0.25s ease;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu: FunctionComponent<{ onTop: boolean }> = ({ onTop }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickMenu = (e: MouseEvent): void => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClickMenuItem = (anchorId: string) => (e: MouseEvent): void => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(anchorId).scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  };

  return (
    <>
      <MenuIcon role="button" href="#" onClick={handleClickMenu} onTop={onTop}>
        <StyledMenuIcon open={open} onTop={onTop} />
      </MenuIcon>
      <MenuOverlay open={open}>
        <MenuItem
          onClick={handleClickMenuItem("__next")}
          role="button"
          href="#"
        >
          inicio
        </MenuItem>
        <MenuItem role="button" href="#" onClick={handleClickMenuItem("about")}>
          sobre
        </MenuItem>
        <MenuItem role="button" href="#" onClick={handleClickMenuItem("about")}>
          historia
        </MenuItem>
        <MenuItem role="button" href="#" onClick={handleClickMenuItem("about")}>
          novidades
        </MenuItem>
        <MenuItem
          onClick={handleClickMenuItem("contact")}
          role="button"
          href="#"
        >
          contato
        </MenuItem>
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
