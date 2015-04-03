import React from 'react';
import Router from 'react-router';

var {Link} = Router;

export default React.createClass({

  getInitialState() {
    return {
      menus: []
    }
  },

  componentDidMount() {
    let {source} = this.props;

    $.get(source, function(result) {
      this.setState({
        menus: result
      });
    }.bind(this));
  },

  render() {
    return (
      <nav>
        <ul>
        {
          this.state.menus.map(item => {
            let {link, name} = item;
            return (
              <li><Link to="index" params={{cate: link.substr(1)}}>{name}</Link></li>
            );
          })
        }
        </ul>
      </nav>
    );
  }

});
