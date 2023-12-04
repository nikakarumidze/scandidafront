import { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store/productSlice';
import axios from 'axios';
interface ProductsDataManagerProps {
  children: React.ReactNode;
}

const ProductsDataManager: React.FC<ProductsDataManagerProps> = memo(
  ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      axios
        .get(process.env.REACT_APP_SERVER_ADDRESS)
        .then((res) => dispatch(addProducts(res.data)))
        .catch((err) => console.error(err, 'Error while fetching data'));
    }, []); // The empty dependency array ensures that this effect runs only on component mount

    return <>{children}</>;
  }
);

export default ProductsDataManager;
