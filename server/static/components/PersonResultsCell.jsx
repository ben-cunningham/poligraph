import React from 'react';

class PersonResultsCell extends React.Component {

  render() {
    var name = this.props.name.replace('_', ' ');

    return (
      <div>
        <b>{name}</b>
      </div>
    );
  }
}

export default PersonResultsCell;
