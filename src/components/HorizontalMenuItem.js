import React from 'react';

const HorizontalMenuItem = ({ children, name }) => {
  const onHover = () => {
    console.log('hover', name);
  };

  return <li onMouseEnter={onHover}>{name}</li>;
};

export default HorizontalMenuItem;
