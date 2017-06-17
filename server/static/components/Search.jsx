import React from 'react';

import SearchBar from './SearchBar.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    handleSearch() {
        var client = new ApiClient();
        client.getPath("Q6294", "Q76", function(data) {
            this.props.OnFinishedSearch(data);
        });
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
