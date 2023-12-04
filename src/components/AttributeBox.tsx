import React from 'react';

const AttributeBox: React.FC<{ data: Array<string> }> = ({ data }) => {
  return (
    <>
      {data.map((attribute) => {
        const id = attribute.split(' ')[0].toLowerCase();
        return (
          <div key={attribute}>
            <label htmlFor={id}>{attribute}</label>
            <input type='number' id={id} name={id} required />
          </div>
        );
      })}
    </>
  );
};

export default AttributeBox;
