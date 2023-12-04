export type ProductTypes = 'DVD' | 'Furniture' | 'Book';

export interface ProductAttributes {
  size?: string;
  weight?: string;
  h?: string;
  w?: string;
  l?: string;
}
export interface ProductI extends ProductAttributes {
  sku: string;
  name: string;
  price: number;
  product_type: ProductTypes;
}

export interface AttributeI extends Record<ProductTypes, string[]> {
  [key: string]: string[];
}
