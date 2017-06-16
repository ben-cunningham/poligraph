import React from 'react';
import ReactDOM from 'react-dom';

import ApiClient from '../services/api.js';

class Index extends React.Component {
  componentDidMount() {
      var client = new ApiClient();
      client.getPath("Q6294", "Q76");
  }

  render() {
    return <h1> Connect-DC </h1>
  }
}

ReactDOM.render(<Index/>, document.getElementById('container'));
