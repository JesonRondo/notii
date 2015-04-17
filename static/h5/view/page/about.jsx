import React from 'react';
import dispatcher from '../../helper/dispatcher';
import styles from '../../theme/default/about';

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
    return (
      <div style={styles.about}>
        <img style={styles.avatar} src="/img/avatar/longzhou_1402465595_11.jpg@200x200" height="100" width="100" />
        <p>没有改变世界</p>
        <p>也没有等到未来</p>
        <p>到今天还是个F2E</p>
        <a style={styles.link} href="mailto:pancnlz@gmail.com">pancnlz@gmail.com</a>
      </div>
    );
  }
});
