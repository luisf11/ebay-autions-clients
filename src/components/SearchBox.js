import React from 'react';
import styled from 'styled-components';

import {ContainerStyles} from '../shared/style.js'

const Container = styled.div`${ContainerStyles}`;

const SearchBox = () => {
    return (
        <Container
            direction="row"
            content="center"
            align="center">
           <input type="text" placeholder="search product..."/>
        </Container>
    );
}

export default SearchBox;
