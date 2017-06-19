import React from 'react';

import ApiClient from '../services/api.js';

import SearchBar from './SearchBar.jsx';
import SearchDropDown from './SearchDropDown.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onInputChange(input) {
    var client = new ApiClient();
    client.SearchPolitician(input, function(results) {
      this.setState(results);
    });
  }

  onSelection(selection) {
    this.props.onSelection(selection);
  }
  
  render() {
    return (
      <div class="search-container">
        <SearchBar onInputChange={this.onInputChange} />
        <SearchDropDown results={this.state.searchResults} onSelection={this.onSelection}/>
      </div>
    );
  }
}

export default SearchContainer;
