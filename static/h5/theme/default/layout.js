import StyleSheet from 'react-style';

export default StyleSheet.create({
  
  layout: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    height: '100%',
  },
  
  content: {
    position: 'relative',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitBoxFlex: 1,
    overflow: 'hidden',
  },
  
  scroller: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    width: '100%',
    WebkitBoxFlex: 1,
    overflow: 'hidden',
  },

});
