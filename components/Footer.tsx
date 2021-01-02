import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Copyright = styled.span`
  letter-spacing: 2px;
  font-size: 0.75rem;
`;

const Fab = styled.aside`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  justify-content: center;
  border-radius: 3rem;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  height: 3rem;
  display: grid;
  width: 3rem;
  margin: 1rem;
  bottom: 1rem;
  margin-left: auto;
`;

const StyledFooter = styled.footer`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white};
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  padding: 0.5rem 1rem;
  align-items: center;
  display: grid;
  z-index: 999;
  gap: 1ch;
  right: 0;
  left: 0;
`;

const Footer: FunctionComponent = () => {
  return (
    <>
      <Fab>
        <FaWhatsapp />
      </Fab>
      <StyledFooter>
        <Copyright>Dilson Samurai © {new Date().getFullYear()}</Copyright>
        <FaFacebookSquare />
        <FaYoutubeSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </StyledFooter>
    </>
  );
};

export default Footer;
