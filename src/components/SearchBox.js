import React from "react";
import styled from "styled-components";

import { ContainerStyles } from "../shared/style.js";
import { bindActionCreators } from "redux"
import {connect} from 'react-redux';

import {requestApiData} from '../actions';

const Container = styled.div`
  ${ContainerStyles} height: 60px;
  border-bottom: 1px solid rgba(17, 17, 19, 0.21);
`;

const FormContainer = styled.div`
  ${ContainerStyles} margin-top: 10px;
`;

const Input = styled.input`
  width: 400px;
  height: 20px;
  padding: 8px;
`;
const Button = styled.button`
  /* height: 26px; */
  background-color: white; /* Green */
  border: none;
  color: black;
  border: 2px solid #4caf50;
  padding: 9px 32px;
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

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ item: event.target.value });
  }

  handleSubmit() {
    this.props.requestApiData();
    console.log(this.state.item);
  }
  render() {
    return (
      <Container
        direction="row"
        justifyContent="center"
        alignItem="center"
        alignContent="center"
      >
        <FormContainer
          direction="row"
          justifyContent="center"
          alignItem="center"
          alignContent="center"
        >
          <Input
            type="text"
            placeholder="search product..."
            onChange={this.updateInput}
          />
          <Button onClick={this.handleSubmit}>search</Button>
        </FormContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);


export default connect (mapStateToProps,mapDispatchToProps)(SearchBox);
