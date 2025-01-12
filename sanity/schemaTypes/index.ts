import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import productList from './ProductList'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product,productList],
}
