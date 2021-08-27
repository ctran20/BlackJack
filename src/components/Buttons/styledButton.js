import React from 'react';
import './Button.css';

const styledButton = ({ func, label }) => {
  return (
    <button
      style={{ width: 150, borderRadius: 10 }}
      className="pa3 ma4 ba bg-yellow grow"
      type="submit"
      onClick={func}
    >
      {label}
    </button>
  );
};

export default styledButton;
