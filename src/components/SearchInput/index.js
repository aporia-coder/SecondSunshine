import React from "react";
import { FormInput, InputContainer, Form, Search } from "./SearchInputElements";

const SearchInput = ({ name, placeholder }) => {
  return (
    <InputContainer>
      <FormInput placeholder={placeholder} name={name} required />
      <label htmlFor={`${name}`}>
        <span>{name}</span>
      </label>
    </InputContainer>
  );
};

export default SearchInput;
