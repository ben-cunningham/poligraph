import React from 'react';

import ApiClient from '../services/api.js';

import SearchBar from './SearchBar.jsx';
import SearchDropDown from './SearchDropDown.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onInputChange(input) {
    var client = new ApiClient();
    client.searchPolitician(input, (results) => this.setState(results));
  }

  onSelection(selection) {
    this.props.onSelection(this.props.id, selection);
  }
  
  render() {
    return (
      <span className="search-container">
        <SearchBar onInputChange={this.onInputChange} />
        <SearchDropDown results={this.state.results} onSelection={this.onSelection}/>
      </span>
    );
  }
}

export default SearchContainer;
