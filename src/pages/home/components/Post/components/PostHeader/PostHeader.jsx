import React from 'react';
import PropTypes from 'prop-types';
import { UserImage } from '../../../../../../components';
import './styles.css';

const PostHeader = ({ img, name, location }) => (
  <div className="PostHeader">
    <div className="PostHeader-user">
      <UserImage src={img} />
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-place">{location}</span>
      </div>
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
  location: PropTypes.string.isRequired,
};

export default PostHeader;
