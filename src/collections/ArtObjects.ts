import type { CollectionConfig } from 'payload'

export const ArtObjects: CollectionConfig = {
  slug: 'artObjects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'images',
      label: 'Media',
      labels: {
        singular: 'Media',
        plural: 'Media',
      },
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'image',
          label: 'Image or Video',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'vorangestellt',
      type: 'checkbox',
      defaultValue: false,
      required: true, // Checkboxes are usually required to have a boolean value
    },
    {
      name: 'orderOfObjects',
      type: 'number',
    },
  ],
}
