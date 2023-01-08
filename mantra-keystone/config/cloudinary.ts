import { cloudinaryImage } from "@keystone-6/cloudinary";
import { Environment } from "../environment";
import { Env, FirstParameter } from "../types";

export const CloudinaryConfig: Record<Env, FirstParameter<typeof cloudinaryImage>> = {
  development: {
    cloudinary: {
      cloudName: 'mrkutly',
      apiKey: Environment.cloudinaryApiKey,
      apiSecret: Environment.cloudinaryApiSecret,
      folder: Environment.cloudinaryApiFolder,
    }
  },
  production: {
    cloudinary: {
      cloudName: 'mrkutly',
      apiKey: Environment.cloudinaryApiKey,
      apiSecret: Environment.cloudinaryApiSecret,
      folder: Environment.cloudinaryApiFolder,
    }
  },
}