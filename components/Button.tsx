import styled from '@emotion/styled'

export default styled.button<{ big?: boolean }>`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  transition: 0.3s ease;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  &:disabled {
    background: ${(props) => props.theme.grey};
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: ${(props) => (props.big ? '1rem 3rem' : '0.5rem 2rem')};
    font-size: ${(props) => (props.big ? '1.5rem' : '1.1rem')};
  }
`
