import React, { Component } from "react";
import styled from "styled-components";
import { ContainerStyles } from "../shared/style.js";
import Item from "./Item";
import {bindActionsCreator, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {requestApiData} from '../actions';


const Container = styled.div`
  ${ContainerStyles} flex-wrap: wrap;
`;

// const endPoint =
//   "https://gist.githubusercontent.com/luisf11/c1427b229d4623435ed44b890f5d849a/raw/7a547b6dcb7f3cf6107cd01271143619d3f37142/items.json";

class ListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoading: false
  //   };
  // }
  componentDidMount() {
    // fetch(endPoint)
    //   .then(blob => blob.json())
    //   .then(data => this.setState({ items: data, isLoading: false }));
    this.props.requestApiData();
    console.log(this.props.requestApiData())
  }

  render() {
    // const { items, isLoading } = this.state;
    const  items  = this.props.data;
    console.log(this.props)

    if (!items) {
      return <p>Loading data...</p>;
    }

    return (
      <Container
        direction="row"
        alignContent="space-between"
      >
        {items.map(item => (
          <Item
            key={item.id}
            name={item.name}
            status={item.status}
            time={item.time}
            price={item.price}
            bidding={item.bidding}
            shipping={item.shipping}
            link={item.href}
          />
        ))}
      </Container>
    );
  }
}

const mapStatetoProps = state => ({data: state.data});


const mapDispatchToProps = dispatch => 
  bindActionCreators({requestApiData},dispatch);

export default connect(mapStatetoProps,mapDispatchToProps)(ListItem) ;
