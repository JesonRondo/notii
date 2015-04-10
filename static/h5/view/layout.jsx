import React from 'react';
import Router from 'react-router';

import Menu from '../component/menu';
import Header from '../component/header';

import Themes from '../theme/default/layout';

var {RouteHandler} = Router;

export default React.createClass({
  render() {
    return (
      <div style={Themes.layout}>
        <Header source="/api/global" />

        <div style={Themes.content}>
          <Menu source="/api/global" />
          <div style={Themes.scroller}>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});
