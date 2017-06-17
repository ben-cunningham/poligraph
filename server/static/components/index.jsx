import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search.jsx';

import ApiClient from '../services/api.js';

class Index extends React.Component {
  componentDidMount() {
      var client = new ApiClient();
      client.getPath("Q6294", "Q76");
  }

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
