import StyleSheet from 'react-style';

let animateStyle = {};

// menu item support 10
animateStyle.navListItemMover = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, -720deg)',
  WebkitTransform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, -720deg)',
  transition: 'transform .2s',
  WebkitTransition: '-webkit-transform .2s',
};

for (let i = 1; i <= 10; i++) {
  animateStyle['navListItemMoverMoveTo' + i] = $.extend({}, animateStyle.navListItemMover, {
    transform: 'translate3d(0, -' + (i * 120 + 20) + '%, 0) rotate3d(0, 0, 1, 0)',
    WebkitTransform: 'translate3d(0, -' + (i * 120 + 20) + '%, 0) rotate3d(0, 0, 1, 0)',
    transitionDelay: i * 0.02 + 's',
    WebkitTransitionDelay: i * 0.02 + 's',
    transition: 'transform .3s',
    WebkitTransition: '-webkit-transform .3s',
  });
}

export default StyleSheet.create($.extend({}, animateStyle, {
  
  nav: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  
  menuOpened: {
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: '50% 50%',
    background: '#f60',
    boxShadow: '1px 1px 1px rgba(0,0,0,.3)',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

  menuClosed: {
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: '50% 50%',
    background: '#f90',
    boxShadow: '1px 1px 1px rgba(0,0,0,.3)',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

  navList: {
    position: 'absolute',
    right: 7,
    bottom: 7,
    width: 32,
    height: 32,
    textAlign: 'right',
  },

  navListItem: {
    display: 'inline-block',
    width: 32,
    height: 32,
    borderRadius: '50%',
    textAlign: 'center',
    background: '#666',
    color: '#999',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: '32px',
  },

  openerClosed: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 32,
    height: 32,
    opacity: 1,
    WebkitOpacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
    WebkitTransform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
    background: 'url(/img/m/icon.png) 0 0 no-repeat',
    backgroundSize: '100% 200%',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

  closerClosed: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 32,
    height: 32,
    opacity: 0,
    WebkitOpacity: 0,
    transform: 'translate3d(-50%, -50%, 0) scale3d(.5, .5, .5) rotate3d(0, 0, 1, 180deg)',
    WebkitTransform: 'translate3d(-50%, -50%, 0) scale3d(.5, .5, .5) rotate3d(0, 0, 1, 180deg)',
    background: 'url(/img/m/icon.png) 0 -32px no-repeat',
    backgroundSize: '100% 200%',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

  openerOpened: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 32,
    height: 32,
    opacity: 0,
    WebkitOpacity: 0,
    transform: 'translate3d(-50%, -50%, 0) scale3d(1.8, 1.8, 1)',
    WebkitTransform: 'translate3d(-50%, -50%, 0) scale3d(1.8, 1.8, 1)',
    background: 'url(/img/m/icon.png) 0 0 no-repeat',
    backgroundSize: '100% 200%',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

  closerOpened: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 32,
    height: 32,
    opacity: 1,
    WebkitOpacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1) rotate3d(0, 0, 1, 0)',
    WebkitTransform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1) rotate3d(0, 0, 1, 0)',
    background: 'url(/img/m/icon.png) 0 -32px no-repeat',
    backgroundSize: '100% 200%',
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

}));
