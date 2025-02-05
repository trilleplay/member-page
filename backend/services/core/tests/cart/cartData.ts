import { Product, ProductCategory, ProductInventory } from '~/src/types/webshop';

export const categories: ProductCategory[] = [
  {
    id: '44a9e42e-70d8-4c81-bc2b-b036e5e31006',
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Café',
    description: 'Detta tillhör caféet',
  },
  {
    id: '50214b17-87f9-433d-999a-3e671857a15a',
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Merch',
    description: 'Detta är merch',
  },
  {
    id: '7ba4f2db-cccd-43cb-b7e5-8cdf3f8a1a3d',
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Biljetter',
    description: 'Detta är biljetter som säljs',
  },
];

export const products: Product[] = [{
  id: 'dcc44dfd-7d70-407f-b2ae-f15fe417b7cb',
  created_at: new Date(),
  updated_at: new Date(),
  name: 'Kaffe',
  description: 'Detta är kaffe',
  price: 50,
  max_per_user: 100,
  image_url: 'https://bild.se/kaffe.jpg',
  category_id: categories[0].id,
  release_date: new Date(),
},
{
  id: '09f72454-f5f0-4392-b7af-ce5f853d8c88',
  created_at: new Date(),
  updated_at: new Date(),
  name: 'T-shirt',
  description: 'Detta är en T-shirt',
  price: 100,
  max_per_user: 100,
  image_url: 'https://bild.se/t-shirt.jpg',
  category_id: categories[1].id,
  release_date: new Date(),
},
{
  id: '21f3fcd5-a8c8-415f-8f3e-711ddef8f970',
  created_at: new Date(),
  updated_at: new Date(),
  name: 'Biljett',
  description: 'Detta är en biljett',
  price: 100,
  max_per_user: 100,
  image_url: 'https://bild.se/biljett.jpg',
  category_id: categories[2].id,
  release_date: new Date(),
},
{
  id: '1d39724e-1872-449f-a1af-15cf84c66c80',
  created_at: new Date(),
  updated_at: new Date(),
  name: 'Biljett',
  description: 'Detta är en sällsynt biljett',
  price: 100,
  max_per_user: 1,
  image_url: 'https://bild.se/biljett.jpg',
  category_id: categories[2].id,
  release_date: new Date(),
},
{
  id: '1d39724f-1872-449f-a1af-15cf84c66c80',
  created_at: new Date(),
  updated_at: new Date(),
  name: 'Gratisbiljett',
  description: 'Detta är en gratis biljett',
  price: 0,
  max_per_user: 1,
  image_url: 'https://bild.se/biljett.jpg',
  category_id: categories[2].id,
  release_date: new Date(),
},
];

export const inventories: ProductInventory[] = [{
  id: '15fc2935-d45b-45ca-b007-5be6698e70d3',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[0].id,
  quantity: 10,
}, {
  id: '3c54572c-d496-4b90-901b-9eb211a1c1cc',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[1].id,
  quantity: 2,
  variant: 'L',
},
{
  id: 'a07dd946-0e10-4635-9858-54b4233916d7',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[1].id,
  quantity: 2,
  variant: 'M',
},
{
  id: 'c31531c1-9979-47de-8054-778b371b465e',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[1].id,
  quantity: 2,
  variant: 'S',
},
{
  id: '204e0295-806c-4c7b-8d6d-832a29d1417a',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[2].id,
  quantity: 1,
}, {
  id: '18bf4e30-122b-4e2e-a448-ebd323de9cf2',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[3].id,
  quantity: 5,
}, {
  id: '18bf4e31-122b-4e2e-a448-ebd323de9cf2',
  created_at: new Date(),
  updated_at: new Date(),
  product_id: products[4].id,
  quantity: 100,
}];

export enum PRODUCT {
  KAFFE = 0,
  T_SHIRT_L = 1,
  T_SHIRT_M = 2,
  T_SHIRT_S = 3,
  BILJETT = 4,
  BILJETT_SALLSYNT = 5,
  FREE_BILJETT = 6,
}
