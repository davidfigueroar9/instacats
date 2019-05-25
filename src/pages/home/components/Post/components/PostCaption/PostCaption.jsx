import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PostCaption = ({ caption, user }) => {
  if (!caption) {
    return null;
  }
  return (
    <div className="PostCaption">
      <span className="username">
        {user}
      </span>
      {caption}
    </div>
  );
};

PostCaption.propTypes = {
  caption: PropTypes.string,
  user: PropTypes.string.isRequired,
};

PostCaption.defaultProps = {
  caption: '',
};

export default PostCaption;
