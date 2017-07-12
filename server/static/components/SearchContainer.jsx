import React from 'react';

import ApiClient from '../services/api.js';

import SearchBar from './SearchBar.jsx';
import SearchDropDown from './SearchDropDown.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selection: "",
      showDropDown: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
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

  onFocus() {
    this.setState({
      showDropDown: true
    });
  }

  onBlur() {
    this.setState({
      showDropDown: false
    });
  }
  
  render() {
    return (
      <span className="search-input-container">
        <SearchBar placeholder={this.props.placeholder}
                   onInputChange={this.onInputChange} 
                   selection={this.state.textValue}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
        <SearchDropDown results={this.state.results} 
                        onSelection={this.onSelection}
                        showDropDown={this.state.showDropDown}/>
      </span>
    );
  }
}

export default SearchContainer;
