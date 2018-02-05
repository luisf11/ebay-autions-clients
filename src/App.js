import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import ListItem from './components/ListItem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox/>
        <ListItem/>
      </div>
    );
  }
}

export default App;
