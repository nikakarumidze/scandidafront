import { useState, ChangeEvent } from 'react';
import classes from './AddProduct.module.scss';
import { attributes } from '../constants';
import AttributeBox from '../components/AttributeBox';
import { submitFormHandler } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [selectedValue, setSelectedValue] = useState<string>('DVD');
  const navigate = useNavigate();

  // Handler for changing the selected product type
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => submitFormHandler(event, navigate)}
      className={classes.form}
      id='product_form'
    >
      <div className={classes.buttons}>
        <input type='submit' value='Save' />
        <button>
          <Link to='/'>Cancel</Link>
        </button>
      </div>
      <hr />
      <div>
        <label htmlFor='sku'>SKU</label>
        <input type='text' id='sku' name='sku' required />
      </div>

      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' required />
      </div>

      <div>
        <label htmlFor='price'>Price ($)</label>
        <input type='number' id='price' name='price' required />
      </div>

      <div>
        <label htmlFor='productType'>Type Switcher</label>
        <select
          name='productType'
          id='productType'
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value='DVD' id='DVD'>
            DVD
          </option>
          <option value='Furniture' id='Furniture'>
            Furniture
          </option>
          <option value='Book' id='Book'>
            Book
          </option>
        </select>
      </div>

      {<AttributeBox data={attributes[selectedValue]} />}
    </form>
  );
};

export default AddProduct;
