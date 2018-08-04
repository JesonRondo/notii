import StyleSheet from 'react-style';

let scale = 2;

export default StyleSheet.create({
  
  frame: {
    position: 'relative',
    marginTop: -53,
    paddingLeft: 8 * scale,
    paddingRight: 8 * scale,
    paddingTop: 10 * scale,
    paddingBottom: 10 * scale,
    height: 53 * scale,
    width: 100 * scale + '%',
    borderBottom: '1px solid #ccc',
    boxSizing: 'border-box',
    transform: 'scale3d(.5,.5,.5)',
    WebkitTransform: 'scale3d(.5,.5,.5)',
    transformOrigin: '0 100%',
    WebkitTransformOrigin: '0 100%',
  },
  
  avatar: {
    float: 'left',
    width: 32 * scale,
    height: 32 * scale,
    marginRight: 8 * scale
  },
  
  blogName: {
    color: '#666',
    fontWeight: 'normal',
    fontSize: 12 * scale,
    lineHeight: '32px'
  },
  
  flag: {
    color: '#999',
    fontSize: 12 * scale,
    lineHeight: '32px'
  },

  title: {
    color: '#666',
    fontSize: 14 * scale,
    lineHeight: '64px'
  },
  
  headerShow: {
    position: 'absolute',
    top: 10 * scale,
    left: 32 * scale + 8 * scale + 8 * scale,
    opacity: 1,
    WebkitOpacity: 1,
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },
  
  headerHide: {
    position: 'absolute',
    top: 10 * scale,
    left: 32 * scale + 8 * scale + 8 * scale + 10 * scale,
    opacity: 0,
    WebkitOpacity: 0,
    transition: 'all .3s',
    WebkitTransition: 'all .3s',
  },

});
