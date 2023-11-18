import Product from '../components/Product';

const Products = () => {
  return (
    <div>
      <Product
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
