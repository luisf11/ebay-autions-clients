import React from "react";
import styled from "styled-components";
import { ContainerStyles, TextStyles, TitleStyles } from "../shared/style.js";

const Container = styled.div`
${ContainerStyles}
width: 300px;
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
`;
const Title = styled.h2`
  ${TitleStyles};
`;

const Link = styled.a`
    width:100%;
    height: 10%;
`;

const Item = () => {
  return (
    <Container direction="column" content="space-between" align="flex-start">
      <TitleContainer direction="column" content="center" align="center">
        <Title size="20">item name</Title>
      </TitleContainer>
      <Text>status: used</Text>
      <Text>time remaining: 10:00hr</Text>
      <TextContainer direction="row" content="space-between" align="flex-start">
      <Text>Bids: 3 </Text>
      <Text>Price: $100</Text>
      </TextContainer>
      <Text>shipping: </Text>
      <Link src="#">Link</Link>
    </Container>
  );
};

export default Item;
