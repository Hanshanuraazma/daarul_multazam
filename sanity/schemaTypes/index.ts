import { type SchemaTypeDefinition } from 'sanity'
import { galleryItem } from './galleryItem'
import { article } from './article'
import { testimonial } from './testimonial'
import { registration } from './registration'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryItem, article, testimonial, registration],
}
