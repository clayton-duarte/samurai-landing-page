import React from 'react'
import styled from '@emotion/styled'

import Partners from './Partners'
import Section from './Section'
import Row from './Row'
import H3 from './H3'
import P from './P'

const Picture = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background: url('./sobre-mim.webp');
  background-position: right center;
  border-radius: calc(50vw - 2rem);
  background-repeat: no-repeat;
  height: calc(100vw - 4rem);
  width: calc(100vw - 4rem);
  background-size: cover;
  margin: 1rem auto;
  @media (min-width: 768px) {
    border-radius: calc(200px - 2rem);
    height: calc(400px - 4rem);
    width: calc(400px - 4rem);
  }
`

const Blockquote = styled.blockquote`
  border-left: 0.25rem solid ${(props) => props.theme.grey};
  font-style: italic;
  font-weight: bold;
  padding: 0 1rem;
  margin: 1rem;
`

const ResponsiveRow = styled(Row)`
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 3rem;
  }
  @media (min-width: 1024px) {
    gap: 5rem;
  }
`

const About = () => {
  return (
    <Section id="about">
      <H3>Sobre Mim</H3>
      <ResponsiveRow align="start" padding="2rem 0 0 0">
        <Row>
          <Picture />
          <Partners desktopOnly />
        </Row>
        <Row>
          <P>
            Shihan Dilson dos Santos, nascido no Rio de Janeiro, é faixa preta
            6º Dan pela Shotokan Karatê International Federation (SKIF) Japão,
            7º em Shotokan-ryu, Ex membro do Kodansha Kai, presidente da
            Federação de Karatê Semicontato do Estado do Rio de Janeiro e
            intrutor de Artes Marciais.
          </P>
          <P>
            Ele começou a treinar bem cedo aos 9 anos com os grandes mestres
            Furusho, Watanabe, Uriu, Tanaka, Délio e Paulo Goes (Shotokan). E
            desde então, compartilha a filosofia do Karatê Budo.
          </P>
          <Blockquote>
            "O Karatê que descarta o Budo não tem substância."
          </Blockquote>
          <P>
            Budo é um termo japonês que significa "caminho marcial" e se refere
            às disciplinas marciais que tem como principal objetivo o espírito,
            a ética e/ou o desenvolvimento pessoal.
          </P>
          <P>
            Como mestre que pratica o Budo desde os 9 anos, ele enfatiza que
            esse é o melhor dos dois mundos. Pois, pratica e dá aulas baseadas
            na filosofia do Budo, trazendo para si e para seus alunos hábitos de
            disciplina, desenvolvimento da autoconfiança, autoconhecimento,
            entendimento do trabalhar em equipe, corpo saudável e mudança de
            mindset.
          </P>
          <P>
            Além disso, como atleta, mestre Dilson incentiva a prática
            esportiva, trazendo também uma competitividade saudável. As boas
            práticas aprendidas juntamente com o conhecimento técnico são
            levados para fora do Dojo e se tornam presentes no meio familiar, no
            trabalho e principalmente na sociedade como um todo.
          </P>
        </Row>
      </ResponsiveRow>
    </Section>
  )
}

export default About
