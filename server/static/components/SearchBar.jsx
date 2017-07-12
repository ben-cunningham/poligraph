import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleChange(event) {
        this.props.onInputChange(event.target.value);
    }

    onFocus() {
        this.props.onFocus();
    }

    onBlur() {
        this.props.onBlur();
    }

    render() {
        return (
            <input type="text" 
                   placeholder={this.props.placeholder}
                   className="form-control search" 
                   onChange={this.handleChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}
                   value={this.props.selection}/>
        ) 
    }
}

export default SearchBar;
