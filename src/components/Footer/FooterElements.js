import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 40vh;
  width: 100%;
  background-color: #4b4b4b;
  @media (max-width: 1215px) {
    min-height: 30vh;
  }
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  h4 {
    margin: 2rem 0rem;
  }
  i {
    color: ${(props) => props.theme.secondary};
    margin: 1rem 1rem 0rem 0rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const FooterText = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => props.theme.secondary};
`;

export const ScrollUp = styled.div`
  height: 4rem;
  width: 4rem;
  transform: rotate(45deg);
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.primary};
  i {
    transform: rotate(-45deg);
    font-size: 3rem;
    margin: 0rem;
  }
`;
