import React from 'react';
import IconLink from '../iconLink';
import './styles.css';

const Footer = (props) => (
  <div className="Footer-container">
    <div className="Footer">
      <IconLink to="/" icon="fas fa-home" />
      <IconLink to="/explore" icon="fas fa-search" />
      <div className="Icon">
        <i className="far fa-plus-square"/>
      </div>
      <IconLink to="/likes" icon="far fa-heart" />
      <IconLink to="/profile" icon="far fa-user" />
    </div>
  </div>
);

export default Footer;
