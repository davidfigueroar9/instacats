import React from 'react';
import './styles.css';

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Icon">
        <i className="fas fa-camera"/>
      </div>
      <div className="Brand"> Instacats </div>
      <div className="Icon">
        <i className="fas fa-user-plus"/>
      </div>
    </div>
  );
}

export default Header;