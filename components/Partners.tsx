import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  padding: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

const Image = styled.img`
  height: 20vw;
  filter: grayscale(100%) contrast(80%);
`;

const Partners = () => {
  return (
    <Wrapper>
      <Image src="./parceiros-2.webp" />
      <Image src="./parceiros-3.webp" />
      <Image src="./parceiros-1.webp" />
    </Wrapper>
  );
};

export default Partners;
