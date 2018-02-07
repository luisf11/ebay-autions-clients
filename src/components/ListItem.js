import React from 'react';
import styled from 'styled-components';
import {ContainerStyles} from '../shared/style.js'
import Item from './Item'

const Container = styled.div`
${ContainerStyles}
flex-wrap: wrap;
`;



const ListItem = () =>{
    return(
        <Container
        direction="row"
        // justifyContent="space-between"
        alignContent="space-between"
        // alignItems="flex-start"
        >

        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </Container>
    );
}

export default ListItem;