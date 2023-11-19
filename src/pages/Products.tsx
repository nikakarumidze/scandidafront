import Product from '../components/Product';
import classes from './Products.module.scss';

// const allProducts =

const Products = () => {
  return (
    <div className={classes.grid}>
      <Product
        key={'sku'}
        SKU={'sku'}
        checked={false}
        name={'s'}
        price={5}
        dimentionType={0}
      />
    </div>
  );
};

export default Products;
