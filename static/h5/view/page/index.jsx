import React from 'react';
import ArticleList from '../../component/articleList';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {

    var cate = this.context.router.getCurrentParams().cate;

    return (
      <div>
        <h2>Hello Index {cate}</h2>
        <ArticleList source="/api/article" cate={cate}></ArticleList>
      </div>
    );
  }
});
