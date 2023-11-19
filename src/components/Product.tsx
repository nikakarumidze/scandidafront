import React from 'react';
import classes from './Product.module.scss';
import { ProductI } from '../interfaces';

const Product: React.FC<ProductI> = ({
  sku,
  name,
  price,
  product_type,
}) => {
  return (
    <div className={classes.box}>
      <input type='checkbox' checked={false} className='delete-checkbox' />
      <h4>{sku}</h4>
      <h4>{name}</h4>
      <p>
        {price}
        <span> $</span>
      </p>
      <p>{product_type}</p>
    </div>
  );
};

export default Product;
