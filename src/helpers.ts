import { FormEvent } from 'react';
import axios from 'axios';

export const submitFormHandler = (
  event: FormEvent<HTMLFormElement>,
  redirect: Function
) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const productType = form.get('productType');
  productType !== null && form.set('product_type', productType);
  form.delete('productType');

  axios
    .post(process.env.REACT_APP_SERVER_ADDRESS, form)
    .then((res) => res.status === 200 && redirect('/'))
    .catch((err) => console.log(err.response.data));
};
