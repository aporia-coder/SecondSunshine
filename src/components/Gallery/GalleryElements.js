import styled from "styled-components";

export const GalleryContainer = styled.div`
  min-height: 120vh;
  padding: 1rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10%, 33%));
  grid-template-rows: repeat(3, 300px);
  gap: 20px;
  height: 100%;
  width: 100%;
`;
