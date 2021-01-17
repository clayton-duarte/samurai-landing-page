import styled from "@emotion/styled";

interface RowProps {
  template?: string;
  padding?: string;
  justify?: string;
  align?: string;
  rows?: string;
}

export default styled.div<RowProps>`
  grid-template-columns: ${(props) => props.template || "auto"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  justify-content: ${(props) => props.justify || "auto"};
  align-content: ${(props) => props.align || "center"};
  align-items: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding || "0"};
  display: grid;
  gap: 1.5rem;
`;
