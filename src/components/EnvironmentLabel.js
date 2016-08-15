import React from 'react';
import './EnvironmentLabel.css';

const EnvironmentLabel = () => {
  if (process.env.REACT_APP_ENV === 'production') {
    return null;
  }

  return (
    <span className="EnvironmentLabel">{process.env.REACT_APP_ENV || "development"}</span>
  )
}

export default EnvironmentLabel;
