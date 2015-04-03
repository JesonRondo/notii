import React from 'react';
import Router from 'react-router';

import Menu from '../component/menu';

var {RouteHandler} = Router;

export default React.createClass({
  render() {
    return (
      <div>

        <header>{this.props.title}</header>
        <Menu source="/api/menu"></Menu>

        <div>
          <RouteHandler/>
        </div>

      </div>
    );
  }
});
