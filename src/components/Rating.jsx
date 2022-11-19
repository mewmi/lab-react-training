import React from 'react';

const Rating = (props) => {
  const rate = Math.round(props.children);
  let full = '★'.repeat(rate);
  let empty = '☆'.repeat(5 - rate);

  return <div>{full + empty}</div>;
};

export default Rating;
