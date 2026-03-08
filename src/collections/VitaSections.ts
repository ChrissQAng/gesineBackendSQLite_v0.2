import type { CollectionConfig } from 'payload'

export const VitaSections: CollectionConfig = {
  slug: 'vitaSections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'select',
      required: true,
      label: 'Section Title',
      options: [
        { label: 'teaching', value: 'teaching' },
        { label: 'grants, prizes, residencies', value: 'grants, prizes, residencies' },
        { label: 'selected solo/duo shows', value: 'selected solo/duo shows' },
        { label: 'selected group shows', value: 'selected group shows' },
        { label: 'collections', value: 'collections' },
      ],
    },
    {
      name: 'entries',
      type: 'array',
      label: 'Entries',
      labels: {
        singular: 'Entry',
        plural: 'Entries',
      },
      admin: {
        description:
          'Entries within this section. New entries should be added at the top. For "collections", leave "year" empty.',
      },
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Year',
          admin: {
            description:
              'Year or period, e.g. "2024", "2018-2017". Leave empty to continue previous year.',
            condition: (data) => {
              return data?.title?.toLowerCase() !== 'collections'
            },
          },
        },
        {
          name: 'text',
          type: 'richText',
          required: true,
          label: 'Text',
        },
      ],
    },
  ],
}
