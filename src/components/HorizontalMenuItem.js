import React, { useState } from 'react';
import VerticalMenuItem from './VerticalMenuItem';
import uuid from 'uuid';

const HorizontalMenuItem = ({ children, name }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenuDisplay = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div
      className="item"
      onMouseEnter={toggleMenuDisplay}
      onMouseLeave={toggleMenuDisplay}
    >
      <h3 className="item-text">{name}</h3>
      <div
        style={{
          display: `${displayMenu ? 'block' : 'none'}`,
          position: 'absolute'
        }}
      >
        {children &&
          children.map(({ children, name }) => {
            return (
              <VerticalMenuItem key={uuid()} children={children} name={name} />
            );
          })}
      </div>
    </div>
  );
};

export default HorizontalMenuItem;
