import React from 'react';
import styled from 'styled-components';
import {ContainerStyles} from '../shared/style.js'
import Item from './Item'

const Container = styled.div`${ContainerStyles}`;



const ListItem = () =>{
    return(
        <Container
        direction="row"
        content="flex-start"
        align="flex-start">

        <Item/>
        </Container>
    );
}

export default ListItem;