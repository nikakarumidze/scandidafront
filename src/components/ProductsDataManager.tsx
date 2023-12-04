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
        .get(process.env.SERVER_ADDRESS as string)
        .then((res) => dispatch(addProducts(res.data)))
        .catch((err) => console.log(err, 'error while fetching data'));
    }, []);

    return <>{children}</>;
  }
);

export default ProductsDataManager;
