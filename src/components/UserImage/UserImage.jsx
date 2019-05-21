import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const UserImage = ({ src }) => (
  <img alt="user-pic" className="rounded-image" src={src} />
);

UserImage.propTypes = {
  src: PropTypes.string,
};

UserImage.defaultProps = {
  src: '',
};

export default UserImage;
