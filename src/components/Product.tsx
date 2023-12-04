import React from 'react';
import classes from './Product.module.scss';
import { ProductI } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import {
  removeProductsAdd,
  removeProductsDelete,
} from '../store/removeProductsSlice';
import { DBattributes } from '../constants';
interface ComponentProductI {
  props: ProductI;
}

const Product: React.FC<ComponentProductI> = ({ props }) => {
  const removeProducts = useSelector(
    (state: RootState) => state.removeProducts
  );
  const dispatch = useDispatch();
  const checked = removeProducts.includes(props.sku);
  const attributesArray = DBattributes[props.product_type];

  // Attribute assigment logic
  let attribute = props[attributesArray[0]];
  if (attributesArray.length === 3) {
    attribute +=
      'x' + props[attributesArray[1]] + 'x' + props[attributesArray[2]];
  }

  const checkboxHandler = () => {
    if (checked) {
      dispatch(removeProductsDelete(props.sku));
    } else {
      dispatch(removeProductsAdd(props.sku));
    }
  };
  return (
    <div className={classes.box}>
      <input
        type='checkbox'
        checked={checked}
        className='delete-checkbox'
        onChange={checkboxHandler}
      />
      <h4>{props.sku}</h4>
      <h4>{props.name}</h4>
      <p>
        {props.price}
        <span> $</span>
      </p>
      <p>{props.product_type}</p>
      <p>
        {String(DBattributes[props.product_type]).toUpperCase()} {attribute}
      </p>
    </div>
  );
};

export default Product;
