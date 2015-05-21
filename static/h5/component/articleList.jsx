import React from 'react';
import ArticleListItem from './articleListItem';
import styles from '../theme/default/articleList';
import dispatcher from '../helper/dispatcher';
import scrollViewStyles from '../theme/default/scrollView';

export default React.createClass({

  getInitialState() {
    return {
      isLoading: true, // 是否正在加载
      isLoaded: false, // 是否加载完毕
      articles: []
    }
  },

  refreshData(props = this.props, start = null) {
    let {source, cate, alias} = props;
    let len = 6;

    dispatcher.dispatch({
      actionType: 'loading:show'
    });

    $.get(source, {
      cate: cate,
      start: start,
      len: len,
      _: +new Date
    }, (result) => {
      this.setState({
        isLoading: false,
        articles: start ? this.state.articles.concat(result) : result,
        isLoaded: (result.length === 0 || (result.length % len !== 0)) ? true : false,
      });

      dispatcher.dispatch({
        actionType: 'loading:hide'
      });

    });
  },

  componentDidMount() {
    this.refreshData();
  },

  componentWillReceiveProps(nextProps) {
    // reset scroll
    this.getDOMNode().scrollTop = 0;

    this.refreshData(nextProps);
  },

  scrollHandle() {
    let obj_scroller = this.getDOMNode();
    let {offsetHeight, scrollTop, scrollHeight} = obj_scroller;

    if (Math.abs(scrollHeight - scrollTop) < offsetHeight + 40 &&
      !this.state.isLoading &&
      !this.state.isLoaded) {

      this.setState({
        isLoading: true
      });

      this.refreshData(this.props, this.state.articles.length);

    }
  },

  render() {

    return (
      <div style={scrollViewStyles.scroller} onScroll={this.scrollHandle}>
        <ul style={styles.list}>
          {
            this.state.articles.map(article => {
              return (
                <ArticleListItem data={article} />
              );
            })
          }
        </ul>
      </div>
    );
  }

});
