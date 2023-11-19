import React from 'react';
import classes from './Product.module.scss';
import { ProductI } from '../interfaces';

const Product: React.FC<ProductI> = ({
  SKU,
  checked,
  name,
  price,
  dimentionType,
}) => {
  return (
    <div className={classes.box}>
      <input type='checkbox' checked={checked} className='delete-checkbox' />
      <h4>{SKU}</h4>
      <h4>{name}</h4>
      <p>
        {price}
        <span> $</span>
      </p>
      <p>{dimentionType}</p>
    </div>
  );
};

export default Product;
