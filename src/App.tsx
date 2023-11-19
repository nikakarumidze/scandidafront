import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Header from './components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from './store/productSlice';
import axios from 'axios';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost/product')
      .then((res) => dispatch(addProducts(res.data)))
      .catch((err) => console.log(err, 'error while fetching data'));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/products' index element={<Products />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
