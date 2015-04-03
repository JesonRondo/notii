import React from 'react';
import Router from 'react-router';

var {Link} = Router;

export default React.createClass({

  render() {

    let {title, text, link} = this.props.data;

    let spParam = link.split('/');
    spParam.shift();

    let jumpParam = {
      cate: spParam.shift(),
      year: spParam.shift(),
      month: spParam.shift(),
      day: spParam.shift(),
      blog: spParam.shift()
    };

    return (
      <article>
        <Link to="detail" params={jumpParam}>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{__html: text}} />
        </Link>
      </article>
    );
  }

});
