import React from 'react';

export default React.createClass({

  render() {

    let {title, text} = this.props.data;

    return (
      <article>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </article>
    );
  }

});
