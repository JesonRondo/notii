import React from 'react';
import dispatcher from '../../helper/dispatcher';
import ArticleList from '../../component/articleList';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount() {
    dispatcher.dispatch({
      actionType: 'header:update',
      title: ''
    });
  },

  render() {

    var cate = this.context.router.getCurrentParams().cate;

    return (
      <ArticleList source="/api/article" cate={cate}></ArticleList>
    );
  }
});
