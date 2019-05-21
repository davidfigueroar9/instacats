import React from 'react';
import { UserImage } from '../../../../components';
import './styles.css';

const PostHeader = () => (
  <div className="PostHeader">
    <div>
      <div>
        <UserImage src="https://dummyimage.com/50x50/000/fff" />
      </div>
      <div>
        <span className="user-name"> gisselle </span>
      </div>
    </div>
    <div className="icon-position">
      <div>
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
  </div>
);

export default PostHeader;
