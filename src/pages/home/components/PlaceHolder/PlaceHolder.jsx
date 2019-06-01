import React from 'react';
import './styles.css';

const PlaceHolder = () => (
  <div className="PostPlaceHolder">
    <div className="PostPlaceHolderHeader">
      <div className="PostPlaceHolderUserImage animated-background" />
      <div className="PostPlaceHolderUserName animated-background" />
    </div>
    <div className="PostPlaceHolderImage animated-background" />
  </div>
);

export default PlaceHolder;
