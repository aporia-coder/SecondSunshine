import styled from "styled-components";
import tropicalhouse from "../../assets/images/tropical-house-2.jpg";

export const InfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  height: 70vh;
  margin: 6rem 0;
  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
  }
`;

export const CozyHouseImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  margin-left: auto;
  @media (max-width: 655px) {
    display: none;
  }
`;

export const PictureGrid = styled.div`
  min-height: 80vh;
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  @media (max-width: 830px) {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`;

export const TropicalHouseImg = styled.img.attrs({
  src: tropicalhouse,
})`
  grid-column: 1/5;
  grid-row: 1/4;
  object-fit: cover;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  @media (max-width: 830px) {
    grid-row: 1/2;
  }
  @media (max-width: 655px) {
    grid-column: 1 / 5;
    grid-row: 1/2;
  }
`;

export const Card = styled.div`
  padding: 2rem;
  grid-column: 3/6;
  grid-row: 1/2;
  z-index: 2;
  background-color: #fff;
  box-shadow: 5px 5px 34px 0px rgba(0, 0, 0, 0.7);
  margin-top: 4rem;
  @media (max-width: 655px) {
    grid-column: 1 / 7;
    grid-row: 2/3;
    box-shadow: none;
  }
`;
