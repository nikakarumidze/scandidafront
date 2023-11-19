import Product from '../components/Product';
import classes from './Products.module.scss';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector((state: RootState) => state.products);
  console.log(products);
  console.log('zd')

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
