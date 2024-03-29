import React from 'react';
import classes from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import ProductsDelete from './ProductsDelete';

const Header = () => {
  const location = useLocation();
  const isAddproductPage = location.pathname === '/addproduct';

  return (
    <header className={classes.header}>
      <h1>
        <Link to='/'>{isAddproductPage ? 'Add Product' : 'Product List'}</Link>
      </h1>
      <div>
        {!isAddproductPage && (
          <>
            <Link to='/addproduct'>
              <button value='ADD'>ADD</button>
            </Link>
            <ProductsDelete />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
