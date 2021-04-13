import styled from "styled-components";

export const FormInput = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
  placeholder: props.placeholder,
}))`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.contact ? "#fff" : "#f3f3f3")};
  padding-top: 1.5rem;
  transition: all 0.2s ease-in-out;
  border: none;
  border-bottom: 1px solid ${(props) => (props.errors ? "red" : "black")};
  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.errors ? "red" : props.theme.primary)};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  height: 3rem;
`;

// Make inputs required with props
