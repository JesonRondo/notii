import React from 'react';
import styles from '../theme/default/article';
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

    $.get(source, {
      alias: alias
    }, function(result) {
      this.setState({
        article: result[0]
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
