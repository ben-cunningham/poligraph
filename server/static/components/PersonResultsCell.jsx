import React from 'react';

class PersonResultsCell extends React.Component {
  
  render() {
    return (
      <div>
        <b>{this.props.id}</b>
      </div>
    );
  }
}

export default PersonResultsCell;
