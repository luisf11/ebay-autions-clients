import React, { Component } from "react";
import styled from "styled-components";
import { ContainerStyles } from "../shared/style.js";
import Item from "./Item";

const Container = styled.div`
  ${ContainerStyles} flex-wrap: wrap;
`;

const endPoint =
  "https://gist.githubusercontent.com/luisf11/c1427b229d4623435ed44b890f5d849a/raw/7a547b6dcb7f3cf6107cd01271143619d3f37142/items.json";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false
    };
  }
  componentDidMount() {
    fetch(endPoint)
      .then(blob => blob.json())
      .then(data => this.setState({ items: data, isLoading: false }));
  }

  render() {
    const { items, isLoading } = this.state;
    console.log(items);

    if (isLoading) {
      return <p>Loadind...</p>;
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

export default ListItem;
