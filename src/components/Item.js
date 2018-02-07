import React from "react";
import styled from "styled-components";
import { ContainerStyles, TextStyles, TitleStyles } from "../shared/style.js";

const Container = styled.div`
${ContainerStyles}
width: 300px;
`;

const CardContainer = Container.extend`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.43);
margin: 15px;
`;

const TitleContainer = Container.extend`
width:100%;

`;

const TextContainer = Container.extend`
width:100%;
`;
const Text = styled.p`
  ${TextStyles};
  margin-left: 10%;
  flex: 1;
`;
const Title = styled.h2`
  ${TitleStyles};
  margin-left: 10%;
`;

const Link = styled.a`
    margin-left: 10%;
    margin-bottom: 10px;
`;

const Item = (props) => {
  return (
    <CardContainer direction="column" justifyContent="space-between" alignItems="flex-start"  >
      <TitleContainer direction="column">
        <Title size="20">{props.name}</Title>
      </TitleContainer>
      <Text>{props.status}</Text>
      <Text>{props.time}</Text>
      <TextContainer direction="row"  alignItems="flex-start">
      <Text>Bids: {props.bids}</Text>
      <Text>${props.price}</Text>
      </TextContainer>
      <Text>{props.shipping}</Text>
      <Link src={props.link}>Go Ebay</Link>
    </CardContainer>
  );
};

export default Item;
