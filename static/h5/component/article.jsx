import React from 'react';
import styles from '../theme/default/article';
import dispatcher from '../helper/dispatcher';
import scrollViewStyles from '../theme/default/scrollView';

export default React.createClass({

  getInitialState() {
    return {
      article: {
        title: '',
        text: ''
      }
    }
  },

  refreshData(props = this.props) {
    let {source, alias} = props;

    dispatcher.dispatch({
      actionType: 'loading:show'
    });

    $.get(source, {
      alias: alias
    }, function(result) {
      let articleData = result[0];

      this.setState({
        article: articleData
      });

      dispatcher.dispatch({
        actionType: 'header:update',
        title: articleData.title
      });

      dispatcher.dispatch({
        actionType: 'loading:hide'
      });

    }.bind(this));

  },

  componentDidMount() {
    this.refreshData();
  },

  componentWillReceiveProps(nextProps) {
    this.refreshData(nextProps);
  },

  render() {

    let {title, text, createtime} = this.state.article;

    return (
      <div style={scrollViewStyles.scroller}>
        <article>
          <p style={styles.time}>{createtime}</p>
          <div style={styles.cnt} dangerouslySetInnerHTML={{__html: text}} />
        </article>
      </div>
    );
  }

});
