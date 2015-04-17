import React from 'react';
import styles from '../theme/default/loading';
import dispatcher from '../helper/dispatcher';

export default React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  componentDidMount() {
    dispatcher.register((load) => {
      switch (load.actionType) {
        case 'loading:show':
          this.setState({
            isLoading: true
          });
          break;

        case 'loading:hide':
          this.setState({
            isLoading: false
          });
          break;
      } 
    });
  },

  render() {

    return (
      <div style={this.state.isLoading ? styles.loader : styles.hideLoader}>
        <div style={styles.bounce1}></div>
        <div style={styles.bounce2}></div>
        <div style={styles.bounce3}></div>
      </div>
    );

  }

});
