import styled from "styled-components";

export const MapContainer = styled.div`
  height: calc(100vh - 3.5rem);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ResultsContainer = styled.div`
  max-height: 50%;
  width: 100%;
  overflow-y: scroll;
`;
