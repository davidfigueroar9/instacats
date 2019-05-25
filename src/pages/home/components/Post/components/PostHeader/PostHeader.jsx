import React from 'react';
import PropTypes from 'prop-types';
import { UserImage } from '../../../../../../components';
import './styles.css';

const PostHeader = ({ img, name }) => (
  <div className="PostHeader">
    <div className="PostHeader-user">
      <UserImage src={img} />
      <span className="user-name">{name}</span>
    </div>

    <div className="icon-position">
      <div>
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
  </div>
);

PostHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PostHeader;
