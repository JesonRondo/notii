import React from 'react';
import styles from '../theme/default/header';
import dispatcher from '../helper/dispatcher';

export default React.createClass({

  getInitialState() {
    return {
      title: '',
      data: {
        avatar: 'https://dn-longhou.qbox.me/img/avatar/1685674.png'
      }
    }
  },

  componentDidMount() {
    let {source} = this.props;

    $.get(source, function(result) {
      this.setState({
        data: result
      });
    }.bind(this));

    dispatcher.register((load) => {
      if (load.actionType === 'header:update') {
        this.setState({
          title: load.title
        });
      }
    });
  },

  render() {

    let {avatar, blogName, flag} = this.state.data;
    let {title} = this.state;

    let hasTitle = title ? true : false;

    return (
      <header style={styles.frame}>
        <img style={styles.avatar} src={avatar + "@64x64"} />
        <div style={!hasTitle ? styles.headerShow : styles.headerHide}>
          <h4 style={styles.blogName}>{blogName}</h4>
          <p style={styles.flag}>{flag}</p>
        </div>
        <div style={hasTitle ? styles.headerShow : styles.headerHide}>
          <h1 style={styles.title}>{title}</h1>
        </div>
      </header>
    );

  }

});
