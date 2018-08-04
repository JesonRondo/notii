import React from 'react';
import Article from '../../component/article';

export default React.createClass({
  
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {

    var {year, month, day, blog} = this.context.router.getCurrentParams();
    var alias = [year, month, day, blog.split('.')[0]].join('-');

    return (
      <Article source="/api/article" alias={alias}></Article>
    );
  }
});
