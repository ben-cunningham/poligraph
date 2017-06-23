import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search.jsx';
import Results from './Results.jsx';

class Index extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          path: []
      };
      this.onFinishedSearch = this.onFinishedSearch.bind(this);
  }

  onFinishedSearch(data) {
    this.setState({
      path: data
    });
  }

  render() {
    return (
      <div className="content">
          <h1> Connect-DC </h1>
          <Search onFinishedSearch={this.onFinishedSearch}></Search>
          <Results path={this.state.path}></Results>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('container'));
