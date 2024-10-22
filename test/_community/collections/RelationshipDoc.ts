import type { CollectionConfig } from 'payload'

export const RelationshipDocs: CollectionConfig = {
  slug: 'relationship-docs',
  admin: {
    useAsTitle: 'title',
    description: 'A collection with a relationship to a collection with a join field',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'relationship',
      type: 'relationship',
      relationTo: 'join-docs',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
