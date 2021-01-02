import styled from "@emotion/styled";

export default styled.button`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  transition: 0.3s ease;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  &:disabled {
    background: ${(props) => props.theme.grey};
  }
`;
