import type { CollectionConfig } from 'payload'

export const JoinDocs: CollectionConfig = {
  slug: 'join-docs',
  admin: {
    useAsTitle: 'title',
    description: 'A collection with a join to relating collection',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'relationship',
      type: 'join',
      collection: 'relationship-docs',
      on: 'relationship',
    },
  ],
}
