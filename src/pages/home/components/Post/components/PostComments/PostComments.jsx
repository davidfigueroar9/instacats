import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PostComments = ({ comments }) => {
  if (!comments) {
    return null;
  }
  return comments.map(comment => (
    <div className="PostComments">
      <span className="username">
        username
      </span>
      {` ${comment.comment}`}
    </div>
  ));
};

PostComments.propTypes = {
  comments: PropTypes.string,
  user: PropTypes.string.isRequired,

};

PostComments.defaultProps = {
  comments: '',
};

export default PostComments;
