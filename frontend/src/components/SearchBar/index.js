import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin: 0;
  padding: 0.2rem 0.4rem;
  color: black;
  width: 90%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;
  }
`;
const InputDiv = styled.div`
  margin: 20px 0;
  padding: 0;
`;

const SearchBar = () => (
  <InputDiv>
    <Input type="text" />
  </InputDiv>
);

export default SearchBar;
