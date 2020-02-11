import React, { useState, useEffect } from 'react';
import HorizontalMenuItem from './HorizontalMenuItem';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      name: 'root',
      children: [
        {
          name: 'file',
          children: [
            {
              name: 'file1',
              children: []
            },
            {
              name: 'file2',
              children: []
            },
            {
              name: 'file3',
              children: []
            }
          ]
        },
        {
          name: 'edit',
          children: [
            {
              name: 'edit1',
              children: [
                {
                  name: 'edit11',
                  children: []
                },
                {
                  name: 'edit12',
                  children: []
                },
                {
                  name: 'edit13',
                  children: []
                }
              ]
            },
            {
              name: 'edit2',
              children: []
            },
            {
              name: 'edit3',
              children: []
            }
          ]
        },
        {
          name: 'view',
          children: []
        },
        {
          name: 'go',
          children: []
        }
      ]
    });
  }, []);

  return (
    <ul className="root">
      {data &&
        data.children &&
        data.children.map((child, index) => {
          return (
            <HorizontalMenuItem
              key={index}
              name={child.name}
              children={child.children}
            />
          );
        })}
    </ul>
  );
};

export default App;
