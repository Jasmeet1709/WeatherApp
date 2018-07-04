import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import Card from '../containers/tryingCard';

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Hello</h1>
          <SearchBar />
          <Card/>
      </div>
    );
  }
}
