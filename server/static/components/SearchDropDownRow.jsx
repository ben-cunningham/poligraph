import React from 'react';

class SearchDropDownRow extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.props.handleSelection(this.props.id); 
  }
  
  render() {
    return (
      <div className="drop-down-row" onClick={this.handleSelection}>{this.props.name}</div>
    );
  }
}

export default SearchDropDownRow;
