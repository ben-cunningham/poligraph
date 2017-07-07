import React from 'react';

import SearchDropDownRow from './SearchDropDownRow.jsx';

class SearchDropDown extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showDropDown: false };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(key, name) {
    this.props.onSelection(key, name);
    this.setState({
      showDropDown: false
    });
  }

  componentWillReceiveProps() {
    this.setState({
      showDropDown: this.props.showDropDown
    });
  }

  render() {
    var rows = [];
    this.props.results.forEach((pol) => {
      var name = pol[1].trim().replace('_', ' ');
      rows.push(<SearchDropDownRow key={pol[0]} 
                                   id={pol[0].trim()}
                                   name={name} 
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
