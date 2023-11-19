import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to='/'>Product List</Link>
      </h1>
      <div>
        <button>
          <Link to='/addproduct'>ADD</Link>
        </button>
        <button id='delete-product-btn'>MASS DELETE</button>
      </div>
    </header>
  );
};

export default Header;
