import React from 'react';

class SearchDropDown extends React.Component {
  render() {
    var rows = [];
    this.props.results.forEach((pol) => {
      rows.push(<div key={pol[0]}>{pol[1]}</div>);
    });

    return (
      <div className="drop-down">
          {rows}
      </div>
    );
  }
}

export default SearchDropDown;
