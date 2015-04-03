import React from 'react';
import Router from 'react-router';

// layout
import Layout from './view/layout';

// page
import Index from './view/page/index';
import Detail from './view/page/detail';

var {Route, DefaultRoute} = Router;

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="detail" path="/:cate/:year/:month/:day/:blog.html" handler={Detail}/>
    <Route name="index" path="/:cate" handler={Index}/>
    <DefaultRoute handler={Index}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById('content'));
});
