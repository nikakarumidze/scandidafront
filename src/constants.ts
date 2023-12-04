import { AttributeI, ProductAttributes } from './interfaces';

export const attributes: AttributeI = {
  DVD: ['Size (MB)'],
  Furniture: ['Height (CM)', 'Width (CM)', 'Length (CM)'],
  Book: ['Weight (KG)'],
};

export const DBattributes: Record<string, (keyof ProductAttributes)[]> = {
  DVD: ['size'],
  Furniture: ['h', 'w', 'l'],
  Book: ['weight'],
};
