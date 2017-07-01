import React from 'react';

import ApiClient from '../services/api.js';

import SearchBar from './SearchBar.jsx';
import SearchDropDown from './SearchDropDown.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selection: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onInputChange(input) {
    this.setState({textValue: input})
    var client = new ApiClient();
    client.searchPolitician(input, (results) => this.setState({results: results.results}));
  }

  onSelection(selection, name) {
    this.props.onSelection(this.props.id, selection);
    this.setState({textValue: name});
  }
  
  render() {
    return (
      <span className="search-input-container">
        <SearchBar onInputChange={this.onInputChange} selection={this.state.textValue}/>
        <SearchDropDown results={this.state.results} onSelection={this.onSelection}/>
      </span>
    );
  }
}

export default SearchContainer;
