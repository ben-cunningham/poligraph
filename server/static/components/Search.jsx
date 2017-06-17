import React from 'react';

import SearchBar from './SearchBar.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    handleSearch() {
        var client = new ApiClient();
        client.getPath("Q6294", "Q76");
    }
    
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <SearchBar></SearchBar>
                <button type="button" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default Search;
