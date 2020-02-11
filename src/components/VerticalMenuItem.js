import React, { useState } from 'react';
import uuid from 'uuid';

const VerticalMenuItem = ({ children, name }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenuDisplay = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div
      style={{
        position: 'relative'
      }}
      onMouseEnter={toggleMenuDisplay}
      onMouseLeave={toggleMenuDisplay}
    >
      <h4 className="item-text">
        {name}
        {children.length > 0 ? '>' : null}
      </h4>
      <div
        className="vertical-item-menu"
        style={{
          display: `${displayMenu ? 'block' : 'none'}`
        }}
      >
        {children &&
          children.map(({ name, children }) => {
            return (
              <VerticalMenuItem key={uuid()} children={children} name={name} />
            );
          })}
      </div>
    </div>
  );
};

export default VerticalMenuItem;
