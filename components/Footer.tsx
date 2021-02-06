import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'

const Copyright = styled.span`
  letter-spacing: 2px;
  font-size: 0.75em;
`

const Fab = styled.a`
  margin: 1rem;
  box-shadow: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.white};
  justify-content: center;
  background: #25d366;
  border-radius: 3rem;
  align-items: center;
  margin-left: auto;
  position: sticky;
  /* font-size: 2rem; */
  display: grid;
  bottom: 1rem;
  height: 3rem;
  width: 3rem;
`

const StyledFooter = styled.footer`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white};
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  align-items: center;
  font-size: 0.75rem;
  display: grid;
  z-index: 999;
  gap: 1ch;
  right: 0;
  left: 0;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  > a {
    color: ${(props) => props.theme.white};
  }
`

const Footer: FunctionComponent = () => {
  return (
    <>
      <Fab
        target="_blank"
        href={`https://wa.me/5521999003412?text=${encodeURI(
          'Olá mestre Dilson, gostaria de saber mais informações sobre as suas aulas.'
        )}`}
      >
        <FaWhatsapp fontSize="2rem" />
      </Fab>
      <StyledFooter>
        <Copyright>Dilson Samurai © {new Date().getFullYear()}</Copyright>
        <a target="_blank" href="https://cutt.ly/0jzNwFh">
          <FaYoutubeSquare />
        </a>
        <a target="_blank" href="https://cutt.ly/QjU3pEt">
          <FaFacebookSquare />
        </a>
        <a target="_blank" href="https://cutt.ly/GjU3WXQ">
          <FaInstagramSquare />
        </a>
        <a target="_blank" href="https://cutt.ly/1jU3PDU">
          <FaLinkedin />
        </a>
      </StyledFooter>
    </>
  )
}

export default Footer
