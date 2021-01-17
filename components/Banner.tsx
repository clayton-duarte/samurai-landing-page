import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

import Button from "./Button";
import H1 from "./H1";

const StyledBanner = styled.section`
  color: ${(props) => props.theme.white};
  background: url("./samurai-bg.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  position: relative;
  height: 100vh;
  display: grid;
  &::before {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  &::after {
    border-bottom: 5vw solid ${(props) => props.theme.white};
    border-right: 50vw solid ${(props) => props.theme.white};
    border-left: 50vw solid ${(props) => props.theme.white};
    border-top: 15vw solid transparent;
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    @media (min-width: 768px) {
      border-bottom: 2vw solid ${(props) => props.theme.white};
      border-top: 10vw solid transparent;
    }
    @media (min-width: 1024px) {
      border-bottom: 2vw solid ${(props) => props.theme.white};
      border-top: 5vw solid transparent;
    }
  }
`;

const Wrapper = styled.div`
  justify-items: center;
  text-align: center;
  position: relative;
  line-height: 1.2;
  display: grid;
  padding: 1rem;
  gap: 2.5rem;
`;

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Banner: FunctionComponent = () => {
  const handleClick = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  };

  return (
    <StyledBanner>
      <Wrapper id="home">
        <H1>karatê Budo</H1>
        <SubTitle>
          O Zen em movimento <br />
          Mentalidade samurai
        </SubTitle>
        <SubTitle>Aulas de Karatê e Defesa Pessoal</SubTitle>
        <Button big onClick={handleClick}>
          agende já
        </Button>
      </Wrapper>
    </StyledBanner>
  );
};

export default Banner;
