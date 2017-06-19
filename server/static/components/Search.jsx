import React from 'react';

import SearchContainer from './SearchContainer.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelection = this.onSelection.bind(this);
    }
    
    handleSearch() {
        var client = new ApiClient();
        client.getPath("Q6294", "Q76", (data) => this.props.onFinishedSearch(data));
    }

    onSelection() {
    
    }
    
    render() {
        return (
            <div>
                <SearchContainer onSelection={this.onSelection} />
                <SearchContainer onSelection={this.onSelection} />
                <button type="button" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default Search;
