import StyleSheet from 'react-style';

export default StyleSheet.create({

  hideLoader: {
    display: 'none',
  },

  loader: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: 70,
    transform: 'translate3d(-35px, 0, 0)',
    WebkitTransform: 'translate3d(-35px, 0, 0)',
    textAlign: 'center',
  },

  bounce1: {
    width: 12,
    height: 12,
    backgroundColor: '#4092dd',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'bouncedelay 1.4s infinite ease-in-out',
    animation: 'bouncedelay 1.4s infinite ease-in-out',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both',
    WebkitAnimationDelay: '-0.32s',
    animationDelay: '-0.32s',
  },

  bounce2: {
    width: 12,
    height: 12,
    backgroundColor: '#f90',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'bouncedelay 1.4s infinite ease-in-out',
    animation: 'bouncedelay 1.4s infinite ease-in-out',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both',
    WebkitAnimationDelay: '-0.16s',
    animationDelay: '-0.16s',
  },

  bounce3: {
    width: 12,
    height: 12,
    backgroundColor: '#333',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'bouncedelay 1.4s infinite ease-in-out',
    animation: 'bouncedelay 1.4s infinite ease-in-out',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both',
  }

});
