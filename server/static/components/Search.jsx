import React from 'react';

import SearchContainer from './SearchContainer.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            1: "",
            2: "",
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelection = this.onSelection.bind(this);
    }
    
    handleSearch() {
        if (this.state[1] != "" && this.state[2] != "") {
            var client = new ApiClient();
            client.getPath(this.state[1], this.state[2], (data) => this.props.onFinishedSearch(data));
        }
    }

    onSelection(id, key) {
        if (id == 1) {
            this.setState({
                1: key,
                2: this.state[2]
            }, this.toggleButton);
        } else {
            this.setState({
                1: this.state[1],
                2: key
            }, this.toggleButton);
        }      
    }

    toggleButton() {
        // enable button if state has both values for search 
    }

    checkState() {
    
    }
    
    render() {
        return (
          <div className="search-container">
            <div className="search">
              <form className="pure-form search-form">
                <SearchContainer onSelection={this.onSelection} id={1}/>
                <SearchContainer onSelection={this.onSelection} id={2}/>
                <button type="button" className="pure-button button-success" onClick={this.handleSearch}>Search</button>
              </form>
            </div>
          </div>
        )
    }
}

export default Search;
