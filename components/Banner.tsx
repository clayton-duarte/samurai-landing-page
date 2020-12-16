import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

import Header from "./Header";

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
  }
`;

const Wrapper = styled.div`
  justify-items: center;
  text-align: center;
  position: relative;
  display: grid;
  padding: 1rem;
  gap: 2.5rem;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-weight: normal;
  font-size: 2.5rem;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0;
`;

const Button = styled.button`
  background: ${(props) => props.theme.blue};
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.white};
`;

const ButtonWrapper = styled.div`
  margin: 2rem 0;
`;

const Banner: FunctionComponent = () => {
  return (
    <StyledBanner>
      <Header />
      <Wrapper>
        <Title>karatê Budo</Title>
        <SubTitle>
          O Zen em movimento <br />
          Mentalidade samurai
        </SubTitle>
        <SubTitle>Aulas de Karatê e Defesa Pessoal</SubTitle>
        <ButtonWrapper>
          <Button>agende já</Button>
        </ButtonWrapper>
      </Wrapper>
    </StyledBanner>
  );
};

export default Banner;
