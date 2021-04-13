import styled from "styled-components";

// Images
import searchHero from "../../assets/images/searchHeroSmall.jpg";

export const SearchContainer = styled.div`
  height: calc(100vh - 3.5rem);
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.8),
      rgba(20, 20, 20, 0.2)
    ),
    url(${searchHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SearchInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: "text",
}))`
  font-size: 1rem;
  background-color: #f3f3f3;
  padding-top: 1.5rem;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  border: none;
  border-bottom: 1px solid ${(props) => (props.errors ? "red" : "black")};
  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.errors ? "red" : props.theme.primary)};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  border-radius: 10px;
  background-color: #f3f3f3;
`;
