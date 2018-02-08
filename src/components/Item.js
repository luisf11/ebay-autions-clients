import React from "react";
import styled from "styled-components";
import {ContainerStyles, TextStyles, TitleStyles} from "../shared/style.js";

const Container = styled.div `
${ContainerStyles}
width: 300px;
`;

const CardContainer = Container.extend `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.43);
  margin: 15px;
`;

const TitleContainer = Container.extend `
  width:100%;
  border-bottom: 1px solid rgba(17, 17, 19, 0.21);
  background-color: azure;
`;

const LinkContainer = Container.extend`
border-top: 1px solid rgba(0, 0, 0, 0.24);
`;

const TextContainer = Container.extend `
  width:100%;
`;
const Text = styled.p `
  ${TextStyles};
  margin-left: 10%;
  flex: 1;
`;
const Title = styled.h3 `
  ${TitleStyles};
  margin-left: 10%;
  margin-right: 5%;
`;

const Link = styled.a `
    margin-bottom: 10px;
    margin-top: 10px;
`;

const Item = (props) => {
  return (
    <CardContainer
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start">
      <TitleContainer direction="column">
        <Title size="20">{props.name}</Title>
      </TitleContainer>
      <Text color="black">{props.status}</Text>
      <Text color="black">{props.time}</Text>
      <TextContainer direction="row" alignItems="flex-start">
        <Text color="black">Bids: {props.bids}</Text>
        <Text color="black">${props.price}</Text>
      </TextContainer>
      <Text color="black">{props.shipping}</Text>
      <LinkContainer direction="row" alignItems="center" justifyContent="center" >
      <Link src={props.link}>Go Ebay</Link>
      </LinkContainer>
    </CardContainer>
  );
};

export default Item;
