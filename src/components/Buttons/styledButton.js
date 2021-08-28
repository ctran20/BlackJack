import React from 'react';

const StyledButton = ({ func, label }) => {
  return (
    <button
      style={{ width: 150, borderRadius: 10 }}
      className="pa3 ma4 ba b--black bg-yellow"
      type="submit"
      onClick={func}
    >
      {label}
    </button>
  );
};

export default StyledButton;
