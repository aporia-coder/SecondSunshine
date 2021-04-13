import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: calc(100vh - 3rem);
  margin-top: 2rem;
  textarea {
    width: 100%;
    height: 10rem;
    margin-top: 2rem;
    &:focus {
      outline: 1px solid ${(props) => props.theme.primary};
    }
  }
`;
