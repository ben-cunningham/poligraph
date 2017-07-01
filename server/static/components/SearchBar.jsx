import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onInputChange(event.target.value);
    }

    render() {
        return (
            <input type="text" className="search" onChange={this.handleChange} value={this.props.selection}/>
        ) 
    }
}

export default SearchBar;
