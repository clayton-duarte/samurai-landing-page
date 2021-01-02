import React from "react";
import styled from "@emotion/styled";

import H5 from "./H5";
import H3 from "./H3";
import H4 from "./H4";
import P from "./P";

const StyledSection = styled.section`
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white};
  text-align: center;
  padding: 1.5rem;
  display: grid;
  gap: 2rem;
`;

const Card = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  &:nth-child(even) {
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }
`;

const PriceWrapper = styled.div`
  grid-template-areas: "value currency" "value unit";
  justify-content: center;
  display: grid;
  gap: 0.75rem;
`;

const PriceValue = styled.div`
  font-family: "Roboto Mono", monospace;
  align-self: center;
  font-weight: bold;
  grid-area: value;
  font-size: 4.5rem;
  display: grid;
`;

const Currency = styled.div`
  font-family: "Roboto Mono", monospace;
  grid-area: currency;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: left;
  align-self: end;
  display: grid;
`;

const Unit = styled.div`
  align-self: start;
  text-align: left;
  grid-area: unit;
  display: grid;
`;

const About = () => {
  const renderPrice = (price: number): JSX.Element => {
    return (
      <PriceWrapper>
        <PriceValue>{price}</PriceValue>
        <Currency>R$</Currency>
        <Unit>Por Hora</Unit>
      </PriceWrapper>
    );
  };

  return (
    <StyledSection>
      <H3>Aulas&Treinos</H3>
      <H4>
        Dilson dos Santos, nascido no Rio de Janeiro, é mestre sétimo dan em
        Karatê Budo e instrutor de Defesa Pessoal.
      </H4>
      <Card>
        <H5>Grupos</H5>
        <P>
          Frente a clientes heterogêneos, o aprendizado é direcionado buscando a
          forma mais completa e profissional para atender diferentes tipos de
          alunos com suas particularides.
        </P>
        {renderPrice(20)}
        <P>R$15 por meia hora</P>
      </Card>
      <Card>
        <H5>Aulas Particulares</H5>
        <P>
          Construídas com bases solídas, fundamentadas através de vivências em
          Acabemias, Clubes, entre outros. Com diversas modalidades em Artes
          Marciais e Defesa Pessoal.
        </P>
        {renderPrice(50)}
        <P>R$30 por meia hora</P>
      </Card>
      <Card>
        <H5>treinos aos Finais de semana</H5>
        <P>
          Entre em contato pelo nosso Whatsapp para valores e mais informacoes
        </P>
      </Card>
    </StyledSection>
  );
};

export default About;
