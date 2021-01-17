import styled from "@emotion/styled";

interface SectionProps {
  desktopOnly?: boolean;
  mobileOnly?: boolean;
}

export default styled.section<SectionProps>`
  padding: 4rem 1.5rem 1.5rem 1.5rem;
  max-width: 1288px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  width: 100%;
  @media (min-width: 768px) {
    display: ${(props) => (props.mobileOnly ? "none" : "grid")};
  }
  @media (max-width: 767px) {
    display: ${(props) => (props.desktopOnly ? "none" : "grid")};
  }
`;
