import styled from "@emotion/styled";

export default styled.p<{ strong?: boolean }>`
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
  line-height: 1.5;
  font-size: 1rem;
`;
