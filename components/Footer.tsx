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

const Fab = styled.a`
  margin: 1rem;
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  justify-content: center;
  border-radius: 3rem;
  align-items: center;
  margin-left: auto;
  position: sticky;
  font-size: 2rem;
  display: grid;
  bottom: 1rem;
  height: 3rem;
  width: 3rem;
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
      <Fab
        target="_blank"
        href={`https://wa.me/5521999003412?text=${encodeURI(
          "Olá mestre Dilson, gostaria de saber mais informações sobre as suas aulas."
        )}`}
      >
        <FaWhatsapp />
      </Fab>
      <StyledFooter>
        <Copyright>Dilson Samurai © {new Date().getFullYear()}</Copyright>
        <FaYoutubeSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </StyledFooter>
    </>
  );
};

export default Footer;
