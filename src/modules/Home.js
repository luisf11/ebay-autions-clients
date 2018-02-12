import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import ListItem from '../components/ListItem';

class Home extends Component {
    render() {
        return (
            <div>
                <SearchBox/>
                <ListItem/>
            </div>
        );
    }
}

export default Home;