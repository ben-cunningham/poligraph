import React from 'react';

import SearchDropDownRow from './SearchDropDownRow.jsx';

class SearchDropDown extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(key) {
    this.props.onSelection(key);
  }
  
  render() {
    var rows = [];
    this.props.results.forEach((pol) => {
      rows.push(<SearchDropDownRow key={pol[0]} 
                                   id={pol[0]}
                                   name={pol[1]} 
                                   handleSelection={this.handleSelection}/>);
    });

    return (
      <div className="drop-down">
          {rows}
      </div>
    );
  }
}

export default SearchDropDown;
