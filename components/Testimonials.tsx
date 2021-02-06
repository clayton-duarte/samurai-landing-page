import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Section from './Section'
import Row from './Row'
import P from './P'

const ResponsiveSection = styled(Section)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1288px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Ballon = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-radius: 1rem;
  align-items: center;
  position: relative;
  font-size: 1rem;
  padding: 1.5rem;
  display: grid;
  &::after {
    border-left: 1rem solid ${(props) => props.theme.blue};
    border-top: 1rem solid ${(props) => props.theme.blue};
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    position: absolute;
    bottom: -1rem;
    right: auto;
    content: '';
    left: 4rem;
  }
`

const Thumbnail = styled.div<{ src: string }>`
  background: ${(props) =>
    props.src ? `url(${props.src})` : 'url(http://placekitten.com/300/300)'};
  box-shadow: ${(props) => props.theme.shadow};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4rem;
  grid-area: thumb;
  height: 4rem;
  width: 4rem;
`

const Wrapper = styled.div`
  grid-template-areas: 'thumb text';
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;
  display: grid;
  gap: 1rem;
`

const TextWrapper = styled.div`
  grid-area: text;
  > p {
    line-height: 1.2;
  }
  > p:nth-child(2) {
    font-size: 0.8em;
  }
`

interface Testimonial {
  thumb: string
  name: string
  meta: string
  text: string
}

const TestimonialCard: FunctionComponent<Testimonial> = ({
  thumb,
  text,
  name,
  meta,
}) => {
  return (
    <Row align="end">
      <Ballon>"{text}"</Ballon>
      <Wrapper>
        <Thumbnail src={thumb} />
        <TextWrapper>
          <P strong>{name}</P>
          <P>{meta}</P>
        </TextWrapper>
      </Wrapper>
    </Row>
  )
}

const Testimonials = () => {
  const testimonialList: Testimonial[] = [
    {
      thumb: '/testimonial-1.jpg',
      name: 'Marcos Ribeiro',
      meta: 'Analista Financeiro',
      text:
        'Adorei as aulas do mestre Dilson. Ele realmente utiliza o potencial do Karatê para melhorar a vida das pessoas',
    },
    {
      thumb: '/testimonial-2.jpg',
      name: 'Suzanna P. Almeida',
      meta: 'Antropóloga',
      text:
        'Descobri a prática do Karatê-Dô realizando os treinos com o mestre, e posso afirmar que ele leva a filosofia das Artes Marciais a sério.',
    },
    {
      thumb: '/testimonial-3.jpg',
      name: 'Frederico Valadim',
      meta: 'Aposentado',
      text:
        'Achei que com mais idade seria difícil de me exercitar, porém apesar de as aulas serem dinâmicas e de grande impacto, o Mestre possui vasto conhecimento de anatomia e melhoramento do condicionamento físico',
    },
    {
      thumb: '/testimonial-4.jpg',
      name: 'Fábio Portugal',
      meta: 'Estudante',
      text:
        'O karatê ajudou a melhorar meu foco e consequentemente as minhas notas na escola rs',
    },
  ]

  return (
    <ResponsiveSection>
      {testimonialList.map((testimonial, index) => (
        <TestimonialCard key={`testimonial_${index}`} {...testimonial} />
      ))}
    </ResponsiveSection>
  )
}

export default Testimonials
