import React from "react";
import styled from "@emotion/styled";

import Section from "./Section";
import Row from "./Row";

const Image = styled.img<{ inset?: boolean }>`
  filter: grayscale(100%) contrast(80%);
  height: 20vw;
  @media (min-width: 768px) {
    height: 10vw;
  }
`;

const Partners = ({ ...props }) => {
  return (
    <Section {...props}>
      <Row template="repeat(3, auto)" justify="space-between">
        <Image src="./parceiros-2.webp" />
        <Image src="./parceiros-3.webp" />
        <Image src="./parceiros-1.webp" />
      </Row>
    </Section>
  );
};

export default Partners;
