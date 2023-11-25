import React from 'react';
import classes from './Product.module.scss';
import { ProductI } from '../interfaces';
import { useDispatch } from 'react-redux';

const Product: React.FC<ProductI> = ({
  sku,
  name,
  price,
  product_type,
}) => {
  const dispatch = useDispatch();
  
  const checkboxHandler = () => {

  }
  return (
    <div className={classes.box}>
      <input type='checkbox' checked={false} className='delete-checkbox' onChange={checkboxHandler}/>
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
