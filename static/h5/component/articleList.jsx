import React from 'react';
import Article from './article';

export default React.createClass({

  getInitialState() {
    return {
      articles: []
    }
  },

  refreshData(props = this.props) {
    let {source, cate} = props;

    $.get(source, {
      cate: cate
    }, function(result) {
      this.setState({
        articles: result
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

    return (
      <ul>
        <li>{this.props.source} - {this.props.cate}</li>
        {
          this.state.articles.map(article => {
            return (
              <li>
                <Article data={article}></Article>
              </li>
            );
          })
        }
      </ul>
    );
  }

});