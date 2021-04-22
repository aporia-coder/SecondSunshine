import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  height: calc(100vh - 3rem);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const Heroh1 = styled.h1`
  font-family: ${(props) => props.theme.textPrimary};
  font-size: 6.3rem;
  font-weight: 400;
  text-transform: capitalize;
  grid-row: 2/4;
  grid-column: 1/3;
  z-index: 1;
  @media (max-width: 655px) {
    grid-column: 1/4;
  }
  @media (max-width: 400px) {
    font-size: 4rem;
  }
`;

export const HeroImg = styled.img`
  grid-row: 1/4;
  grid-column: 2/5;
  object-fit: cover;
  opacity: 0;
  max-width: 100%;
  max-height: 100%;
  margin-top: 2rem;
`;
