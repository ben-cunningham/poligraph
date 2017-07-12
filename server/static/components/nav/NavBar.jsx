import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-toggleable-md">
        <span className="navbar-brand title">
          <a href="/"><b>Poligraph</b></a>
          <a href="/about"><i className="fa fa-question-circle" aria-hidden="true"></i></a>
        </span>
      </div>
    );
  }
}

export default NavBar;
