import React from 'react';

import SearchBar from './SearchBar.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSearch() {
        var client = new ApiClient();
        client.getPath("Q6294", "Q76", (data) => this.props.onFinishedSearch(data));
    }
    
    render() {
        return (
            <div>
                <SearchBar onSelection={this.handleSelection}></SearchBar>
                <SearchBar onSelection={this.handleSelection}></SearchBar>
                <button type="button" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default Search;
