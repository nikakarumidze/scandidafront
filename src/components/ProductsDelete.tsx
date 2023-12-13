import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeProductsClear } from '../store/removeProductsSlice';
import { removeProducts } from '../store/productSlice';
import axios from 'axios';

const ProductsDelete = () => {
  // Select the removeProducts array from the Redux store
  const productsToDelete = useSelector(
    (state: RootState) => state.removeProducts
  );
  const dispatch = useDispatch();

  // Handler function for deleting selected products
  const productsDeleteHandler = () => {
    // If the array is empty, do not send the delete request
    if (!productsToDelete.length) return;

    // Send a delete request to the server
    axios
      .delete(process.env.REACT_APP_SERVER_ADDRESS, {
        data: { SKUArr: productsToDelete },
      })
      .then((res) => {
        // If the delete request is successful, dispatch actions to update the store
        if (res) {
          dispatch(removeProducts(productsToDelete));
          dispatch(removeProductsClear());
        } else {
          throw new Error('Delete request failed');
        }
      })
      .catch((err) => console.error(err, 'Please try again'));
  };

  return (
    <button
      id='delete-product-btn'
      onClick={productsDeleteHandler}
      value='MASS DELETE'
    >
      MASS DELETE
    </button>
  );
};

export default ProductsDelete;
