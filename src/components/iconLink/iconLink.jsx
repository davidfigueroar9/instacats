import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IconLink = ({ to, icon }) => (
  <div className="Icon">
    <Link to={to}><i className={icon} /></Link>
  </div>
);

IconLink.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
};

IconLink.defaultProps = {
  to: '',
  icon: '',
};

export default IconLink;
