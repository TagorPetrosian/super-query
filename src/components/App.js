import React, { useState, useEffect } from 'react';
import HorizontalMenuItem from './HorizontalMenuItem';
import uuid from 'uuid';

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
                  children: [
                    {
                      name: 'edit111',
                      children: [
                        {
                          name: 'edit1111',
                          children: []
                        },
                        {
                          name: 'edit1112',
                          children: []
                        },
                        {
                          name: 'edit1113',
                          children: []
                        }
                      ]
                    }
                  ]
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
    <div className="container">
      <div className="header">
        {data &&
          data.children &&
          data.children.map(({ children, name }) => {
            return (
              <HorizontalMenuItem
                key={uuid()}
                children={children}
                name={name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
