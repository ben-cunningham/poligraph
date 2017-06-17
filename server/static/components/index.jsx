import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search.jsx';
import Results from './Results.jsx';

class Index extends React.Component {

  render() {
    return (
        <div>
            <h1> Connect-DC </h1>
            <Search></Search>
            <Results></Results>
        </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('container'));
