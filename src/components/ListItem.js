import React, { Component } from "react";
import styled from "styled-components";
import { ContainerStyles } from "../shared/style.js";
import Item from "./Item";
import { bindActionCreators } from "redux"
import {connect} from 'react-redux';

import {requestApiData} from '../actions';


const Container = styled.div`
  ${ContainerStyles} flex-wrap: wrap;
`;

class ListItem extends Component {
  // componentDidMount() {
  //   this.props.requestApiData();
  // }

  items = (item,i) =>
  <Item
  key={item.id}
  name={item.name}
  status={item.status}
  time={item.time}
  price={item.price}
  bidding={item.bidding}
  shipping={item.shipping}
  link={item.href}
/>;


  render() {
    const data = [...this.props.data]
    return data.length ?(
      <Container
        direction="row"
        alignContent="space-between"
      >
        {data.map(this.items)}
      </Container>
    ):(<p>Loading data...</p>);
  }
}

const mapStateToProps = state => ({ data: state.data });


const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
