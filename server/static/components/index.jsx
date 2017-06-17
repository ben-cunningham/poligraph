import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search.jsx';

class Index extends React.Component {

  render() {
    return (
        <div>
            <h1> Connect-DC </h1>
            <Search></Search>
        </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('container'));
