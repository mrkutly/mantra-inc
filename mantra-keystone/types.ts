
export enum Env {
  development = 'development',
  production = 'production',
}

export enum Group {
  Mantra = 'mantra',
  Recap = 'recap',
  MantraYouth = 'mantrayouth',
}

export enum AlbumHost {
  Bandcamp = 'bandcamp',
  Apple = 'apple',
  Spotify = 'spotify'
}

export type FirstParameter<T extends (...args: any[]) => any> = Parameters<T> extends [infer First, ...any] ? First : never;