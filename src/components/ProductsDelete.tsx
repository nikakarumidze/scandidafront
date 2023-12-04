import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeProductsClear } from '../store/removeProductsSlice';
import { removeProducts } from '../store/productSlice';
import axios from 'axios';

const ProductsDelete = () => {
  const ProductsDelete = useSelector(
    (state: RootState) => state.removeProducts
  );
  const dispatch = useDispatch();

  const ProductsDeleteHandler = () => {
    // If array is empty, do not send request.
    if (!ProductsDelete.length) return;

    axios
      .delete(process.env.SERVER_ADDRESS as string, {
        data: { SKUArr: ProductsDelete },
      })
      .then((res) => {
        if (!res) throw Error();
        dispatch(removeProducts(ProductsDelete));
        dispatch(removeProductsClear());
      })
      .catch((err) => console.log(err, 'please try again'));
  };

  return (
    <button id='delete-product-btn' onClick={ProductsDeleteHandler}>
      MASS DELETE
    </button>
  );
};

export default ProductsDelete;
