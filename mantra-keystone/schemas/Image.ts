import { cloudinaryImage } from '@keystone-6/cloudinary';
import { text } from '@keystone-6/core/fields';
import { Config } from '../config';
import { readonlyList } from './helpers/readonlyList';

export const ImageSchema = readonlyList({
  fields: {
    title: text(),
    altText: text(),
    image: cloudinaryImage(Config.cloudinary),
  }
})
