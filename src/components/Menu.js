import React, { useState } from 'react';

const Menu = ({ children }) => {
  const renderMenuOptions = children => {
    return children.map((child, index) => {
      return <li key={index}>{child.name}</li>;
    });
  };

  return <ul>{renderMenuOptions(children)}</ul>;
};

export default Menu;
