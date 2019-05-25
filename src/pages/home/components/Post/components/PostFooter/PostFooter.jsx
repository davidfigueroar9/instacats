import React from 'react';
import './styles.css';

const PostFooter = () => (
  <div className="PostFooter-container">
    <div className="PostFooter">
      <div className="icon-position icon-size icon">
        <div>
          <i className="far fa-heart icn-space" />
          <i className="far fa-comment" />
        </div>
      </div>

      <div>
        <div>
          <i className="far fa-bookmark icon-size" />
        </div>
      </div>
    </div>
  </div>
);

export default PostFooter;
