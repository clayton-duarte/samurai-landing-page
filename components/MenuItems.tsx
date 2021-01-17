import React, { Dispatch, FunctionComponent, MouseEvent } from "react";
import styled from "@emotion/styled";

const MenuItem = styled.a`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  transition: 0.25s ease;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuItems: FunctionComponent<{
  setOpen: Dispatch<boolean>;
}> = ({ setOpen }) => {
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
      <MenuItem onClick={handleClickMenuItem("__next")} role="button" href="#">
        Início
      </MenuItem>
      <MenuItem role="button" href="#" onClick={handleClickMenuItem("about")}>
        sobre
      </MenuItem>
      {/* <MenuItem role="button" href="#" onClick={handleClickMenuItem("about")}>
        História
      </MenuItem> */}
      <MenuItem role="button" href="#" onClick={handleClickMenuItem("aulas")}>
        aulas
      </MenuItem>
      <MenuItem onClick={handleClickMenuItem("contact")} role="button" href="#">
        contato
      </MenuItem>
    </>
  );
};

export default MenuItems;
