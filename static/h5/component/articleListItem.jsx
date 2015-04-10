import React from 'react';
import Router from 'react-router';
import styles from '../theme/default/articleListItem';

var {Link} = Router;

export default React.createClass({

  // 抓取摘要
  catchSummary(text) {
    let $cnt = $('<div>');
    $cnt.append(text);

    let summary = '';

    $cnt.find('p').each((i, item) => {
      summary += $(item).html();
    });

    return summary.length > 100 ? summary.substr(0, 100) + '...' : summary;
  },

  // 抓取第一张图
  catchImage(text) {
    let $cnt = $('<div>');
    $cnt.append(text);

    let hasCapture = false;
    let captureImage = 'about:blank';

    let $firstImage = $cnt.find('img').eq(0);

    if ($firstImage.length > 0) {
      hasCapture = true;
      captureImage = $firstImage.attr('src');
    }

    return {
      hasCapture: hasCapture,
      captureImage: captureImage,
    };
  },

  render() {

    let {title, link, text, createtime} = this.props.data;
    let spParam = link.split('/');
    spParam.shift();

    let jumpParam = {
      cate: spParam.shift(),
      year: spParam.shift(),
      month: spParam.shift(),
      day: spParam.shift(),
      blog: spParam.shift()
    };

    let content = this.catchSummary(text);
    let {hasCapture, captureImage} = this.catchImage(text);

    let capture;
    if (hasCapture) {
      capture = <img src={captureImage} />
    }

    return (
      <li style={styles.item}>
        <Link to="detail" params={jumpParam}>
          <article>
            <h2 style={styles.tit}>{title}</h2>
            <p style={styles.time}>{createtime}</p>
            <div>
              {capture}
              <summary style={styles.summary}>{content}</summary>
            </div>
          </article>
        </Link>
      </li>
    );
  }

});
