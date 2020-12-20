import React from "react";
import styled from "@emotion/styled";

import H3 from "./H3";
import P from "./P";

const StyledSection = styled.section`
  padding: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

const Picture = styled.div`
  background: url("./sobre-mim.webp");
  background-position: right center;
  border-radius: calc(50vw - 2rem);
  box-shadow: 0 0 0.5rem #0005;
  background-repeat: no-repeat;
  height: calc(100vw - 4rem);
  width: calc(100vw - 4rem);
  background-size: cover;
  margin: 1rem auto;
`;

const Blockquote = styled.blockquote`
  border-left: 0.25rem solid ${(props) => props.theme.grey};
  font-style: italic;
  font-weight: bold;
  padding: 0 1rem;
  margin: 1rem;
`;

const About = () => {
  return (
    <StyledSection>
      <H3>Sobre Mim</H3>
      <Picture />
      <P>
        Dilson dos Santos, nascido no Rio de Janeiro, é mestre sétimo dan em
        Karatê Budo e instrutor de Defesa Pessoal. Começou a treinar bem cedo
        aos 9 anos com os grandes mestres Furusho, Watanabe, Uriu, Tanaka, Délio
        e Paulo Goes (Shotokan). E desde então, compartilha a filosofia do
        Karatê Budo.
      </P>
      <P>
        Budo é um termo japonês que significa "caminho marcial" e se refere às
        disciplinas marciais que tem como principal objetivo o espírito, a ética
        e/ou o desenvolvimento pessoal.
      </P>
      <Blockquote>
        "O Karatê que descarta o Budo não tem substância."
      </Blockquote>
      <P>
        Como mestre que pratica o Budo desde os 9 anos, ele enfatiza que esse é
        o melhor dos dois mundos. Pois, pratica e dá aulas baseadas na filosofia
        do Budo, trazendo para si e para seus alunos hábitos de disciplina,
        desenvolvimento da autoconfiança, autoconhecimento, entendimento do
        trabalhar em equipe, corpo saudável e mudança de mindset.
      </P>
      <P>
        Além disso, como atleta, mestre Dilson incentiva a prática esportiva,
        trazendo também uma competitividade saudável. As boas práticas
        aprendidas juntamente com o conhecimento técnico são levados para fora
        do Dojo e se tornam presentes no meio familiar, no trabalho e
        principalmente na sociedade como um todo.
      </P>
    </StyledSection>
  );
};

export default About;
