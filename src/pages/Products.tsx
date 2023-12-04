import Product from '../components/Product';
import classes from './Products.module.scss';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addProducts, clearProducts } from '../store/productSlice';
import axios from 'axios';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_SERVER_ADDRESS);
        dispatch(addProducts(response.data));
      } catch (error) {
        console.error('Error while fetching data:', error);
        // Handle error or display a user-friendly message
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch]);

  if (loading) {
    // When data is still loading, display a loading message
    return <div>Loading...</div>;
  }

  if (!products.length) {
    // When there are no products, display a message
    return <div>No products available.</div>;
  }

  return (
    <div className={classes.grid}>
      {products.map((product) => (
        <Product props={product} key={product.sku} />
      ))}
    </div>
  );
};

export default Products;
