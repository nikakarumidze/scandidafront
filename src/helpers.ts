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
  console.log(process.env.PUBLIC_URL);
  axios
    .post(process.env.SERVER_ADDRESS as string, form)
    .then((res) => res.status === 200 && redirect('/'))
    .catch((err) => console.log(err.response.data));
};
