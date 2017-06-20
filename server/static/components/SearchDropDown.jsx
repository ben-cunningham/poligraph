import React from 'react';

import SearchDropDownRow from './SearchDropDownRow.jsx';

class SearchDropDown extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showDropDown: true }
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(key) {
    this.props.onSelection(key);
    this.setState({
      showDropDown: false
    });
  }
  
  render() {
    var rows = [];
    this.props.results.forEach((pol) => {
      rows.push(<SearchDropDownRow key={pol[0]} 
                                   id={pol[0].trim()}
                                   name={pol[1].trim()} 
                                   handleSelection={this.handleSelection}/>);
    });

    return (
      <div className={this.state.showDropDown ? 'drop-down' : 'hidden'}>
          {rows}
      </div>
    );
  }
}

export default SearchDropDown;
