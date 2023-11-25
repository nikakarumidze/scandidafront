import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' index element={<Products />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
