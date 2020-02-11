import React from 'react';

const VerticalMenuItem = ({ children }) => {
  const renderMenuOptions = children => {
    return children.map((child, index) => {
      return <li key={index}>{child.name}</li>;
    });
  };

  return <ul>{renderMenuOptions(children)}</ul>;
};

export default VerticalMenuItem;
