import React from 'react';

import SearchBar from './SearchBar.jsx';
import SearchDropDown from './SearchDropDown.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
  
  }
  
  render() {
    return (
      <div class="search-container">
        <SearchBar onInputChange={this.onInputChange} />
        <SearchDropDown results={this.searchResults} />
      </div>
    );
  }
}

export default SearchContainer;
