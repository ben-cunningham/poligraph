import React from 'react';

class ContextResultsCell extends React.Component {
  
  textToList() {
    return this.props.text.split('|');
  }

  render() {
    var textList = this.textToList();
    var ul = [];
    textList.forEach((elem, i) => {
      ul.push(<li key={i}>{elem}</li>);
    });
    return (
      <div>
        <ul>
          {ul}
        </ul>
      </div>
    )
  }
}

export default ContextResultsCell;
