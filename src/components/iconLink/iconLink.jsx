import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ to, icon }) => (
  <div className="Icon">
    <Link to={to}><i className={icon}></i></Link>
  </div>
); 

export default IconLink;
