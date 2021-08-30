import React from 'react';

const Chip = ({ value, total, imgSrc, addChip }) => {
  if (value > total) {
    return <div></div>;
  } else {
    return (
      <img
        style={{ width: 100 }}
        className="ma2 pointer grow"
        alt="chip"
        src={imgSrc}
        onClick={() => {
          addChip(value);
        }}
      />
    );
  }
};

export default Chip;
