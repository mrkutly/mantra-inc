import React from 'react'
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks'
import { ImageUploader } from './admin/components/ImageUploader'
import { image } from './document-fields'

export const componentBlocks = {
  /** Image */
  image: component({
    preview: ({ fields }) => (
      <NotEditable>
        <ImageUploader
          listKey={fields.image.options.listKey}
          defaultValue={fields.imageRel.value?.data}
          imageAlt={fields.imageAlt.value}
          onChange={fields.image.onChange}
          onImageAltChange={fields.imageAlt.onChange}
          onRelationChange={fields.imageRel.onChange}
        />
      </NotEditable>
    ),
    label: 'Image',
    schema: {
      imageAlt: fields.text({
        label: 'Image Alt',
        defaultValue: '',
      }),
      imageRel: fields.relationship({
        listKey: 'Image',
        label: 'Image Relation',
        selection: 'id, image { publicUrl }',
      }),
      image: image({
        listKey: 'Image',
      }),
    },
    chromeless: true,
  }),

  /** YouTube Video */
  youtube: component({
    preview: ({ fields }) => (
      <NotEditable>
        <div>
          {fields.embed ? (
            <div dangerouslySetInnerHTML={{ __html: fields.embed.value }}></div>
          ) : (
            <span>Edit the embed code</span>
          )}
        </div>
      </NotEditable>
    ),
    label: 'Embed',
    schema: {
      embed: fields.text({
        label: 'Embed code',
        defaultValue: '',
      }),
    },
    chromeless: false,
  }),
}