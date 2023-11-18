import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/products' index element={<Products />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='*' element={<Navigate to='/products' />} />
    </Routes>
  );
};

export default App;
