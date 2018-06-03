import React from 'react';
import './Loading.css';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="spin">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
      </div>
    </div>
  );
}