import React from 'react';

import SearchContainer from './SearchContainer.jsx';

import ApiClient from '../services/api.js';

class Search extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            1: "",
            2: "",
            searching: false
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelection = this.onSelection.bind(this);
    }
    
    handleSearch() {
        if (this.state[1] != "" && this.state[2] != "") {
            var client = new ApiClient();
            this.setState({
              searching: true
            });
            client.getPath(this.state[1], this.state[2], (data) => {
                this.setState({
                    searching: false
                });
                this.props.onFinishedSearch(data);
            }, () => {
                this.setState({
                    searching: false
                });
            });
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
              <form className="form-group search-form">
                <div className={this.state.searching ? "loading-spinner" : "hidden"}></div>
                <div className={this.state.searching ? "disable-ui" : "hidden"}></div>
                <SearchContainer onSelection={this.onSelection} id={1}/>
                <SearchContainer onSelection={this.onSelection} id={2}/>
                <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
              </form>
            </div>
          </div>
        )
    }
}

export default Search;
