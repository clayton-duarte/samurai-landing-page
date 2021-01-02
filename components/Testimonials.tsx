import React from "react";
import styled from "@emotion/styled";

import H4 from "./H4";
import P from "./P";

const StyledSection = styled.section`
  padding: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

const Ballon = styled.div<{ index: number }>`
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border-radius: 1rem;
  position: relative;
  padding: 1.5rem;
  &::after {
    border-top: 1rem solid ${(props) => props.theme.red};
    border-left: 1rem solid
      ${(props) => (props.index % 2 === 0 ? props.theme.red : "transparent")};
    border-right: 1rem solid
      ${(props) => (props.index % 2 === 0 ? "transparent" : props.theme.red)};
    right: ${(props) => (props.index % 2 === 0 ? "auto" : "4rem")};
    left: ${(props) => (props.index % 2 === 0 ? "4rem" : "auto")};
    border-bottom: 1rem solid transparent;
    position: absolute;
    bottom: -1rem;
    content: "";
  }
`;

const Thumbnail = styled.div`
  background: url("http://placekitten.com/300/300");
  box-shadow: ${(props) => props.theme.shadow};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4rem;
  grid-area: thumb;
  height: 4rem;
  width: 4rem;
`;

const Wrapper = styled.div<{ index: number }>`
  justify-content: ${(props) => (props.index % 2 === 0 ? "start" : "end")};
  grid-template-areas: ${(props) =>
    props.index % 2 === 0 ? `"thumb text"` : `"text thumb"`};
  grid-template-columns: auto auto;
  align-items: center;
  display: grid;
  gap: 1rem;
`;

const TextWrapper = styled.div<{ index: number }>`
  text-align: ${(props) => (props.index % 2 === 0 ? "left" : "right")};
  grid-area: text;
`;

const Testimonial = ({ index }) => {
  return (
    <StyledSection>
      <Ballon index={index}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa
        omnis excepturi ipsum nemo quaerat nihil corrupti ad repellat! Culpa
        repellendus id perspiciatis quis.
      </Ballon>
      <Wrapper index={index}>
        <Thumbnail />
        <TextWrapper index={index}>
          <H4>nome da pessoa</H4>
          <P>alguma informacao</P>
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  );
};

const Testimonials = () => {
  const testimonialList = [...Array(5)];

  return (
    <>
      {testimonialList.map((a, index) => (
        <Testimonial index={index} />
      ))}
    </>
  );
};

export default Testimonials;
