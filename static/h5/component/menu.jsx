import React from 'react';
import Router from 'react-router';
import styles from '../theme/default/menu';

var {Link} = Router;

export default React.createClass({

  getInitialState() {
    return {
      isMenuOpened: false,
      menus: []
    }
  },

  componentDidMount() {
    let {source} = this.props;

    $.get(source, function(result) {
      this.setState({
        menus: result.navs
      });
    }.bind(this));
  },

  MenuToggle() {
    let {isMenuOpened} = this.state;

    this.setState({
      isMenuOpened: !isMenuOpened
    });
  },

  render() {

    let {isMenuOpened} = this.state;
    let menusLen = this.state.menus.length;

    return (
      <nav style={styles.nav}>
        <ul style={styles.navList}>
        {
          this.state.menus.map((item, i) => {
            let {link, name} = item;

            return (
              <li style={isMenuOpened ? styles['navListItemMoverMoveTo' + (menusLen - i)] : styles.navListItemMover}>
                <Link onClick={this.MenuToggle} to="index" params={{cate: link.substr(1)}}>
                  <i style={styles.navListItem}>{link === '/' ? '首' : link.substr(1, 1).toUpperCase()}</i>
                </Link>
              </li>
            );
          })
        }
        </ul>
        <div style={isMenuOpened ? styles.menuOpened : styles.menuClosed} onTouchEnd={this.MenuToggle}>
          <i style={isMenuOpened ? styles.openerOpened : styles.openerClosed}></i>
          <i style={isMenuOpened ? styles.closerOpened : styles.closerClosed}></i>
        </div>
      </nav>
    );
  }

});
