import React from "react";
import styled from "styled-components";

import { ContainerStyles } from "../shared/style.js";

const Container = styled.div`
  ${ContainerStyles} height: 50px;
`;

const FormContainer = Container.extend``;

const Input = styled.input`
  width: 400px;
  height: 20px;
`;
const Button = styled.button`
  /* height: 26px; */
  background-color: white; /* Green */
  border: none;
  color: black;
  border: 2px solid #4caf50;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

const SearchBox = () => {
  return (
    <Container
      direction="row"
      justifyContent="center"
      alignItem="center"
      alignContent="center"
    >
      <FormContainer direction="row" justifyContent="center" alignItem="center" alignContent="center">
        <Input type="text" placeholder="search product..." />
        <Button>search</Button>
      </FormContainer>
    </Container>
  );
};

export default SearchBox;
