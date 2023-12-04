import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' index element={<Products />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
