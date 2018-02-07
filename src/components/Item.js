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
`;

const Link = styled.a`
    margin-left: 10%;
    margin-bottom: 10px;
`;

const Item = () => {
  return (
    <CardContainer direction="column" justifyContent="space-between" alignItems="flex-start">
      <TitleContainer direction="column" justifyContent="center" alignItems="center">
        <Title size="20">item name</Title>
      </TitleContainer>
      <Text>status: used</Text>
      <Text>time remaining: 10:00hr</Text>
      <TextContainer direction="row"  alignItems="flex-start">
      <Text>Bids: 3 </Text>
      <Text>Price: $100</Text>
      </TextContainer>
      <Text>shipping: </Text>
      <Link src="#">Go Ebay</Link>
    </CardContainer>
  );
};

export default Item;
