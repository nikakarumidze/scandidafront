import Product from '../components/Product';
import classes from './Products.module.scss';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store/productSlice';
import axios from 'axios';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    axios
      .get('http://localhost/product')
      .then((res) => dispatch(addProducts(res.data)))
      .catch((err) => console.log(err, 'error while fetching data'));
  }, []);

  console.log(products);
  console.log('zd');

  return (
    <div className={classes.grid}>
      {products.map((product) => (
        <Product
          key={product.sku}
          sku={product.sku}
          name={product.name}
          price={product.price}
          product_type={product.product_type}
        />
      ))}
    </div>
  );
};

export default Products;
