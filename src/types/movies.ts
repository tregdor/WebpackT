export interface Movie {
  'id': number,
  'title': string,
  'tagline': string,
  'vote_average': number,
  'vote_count': number,
  'release_date': string,
  'poster_path': string,
  'overview': string,
  'budget': number,
  'revenue': number,
  'runtime': number,
  'genres': string[]
}

export interface Movies {
  data: Movie[],
  total: number,
  offset: number,
  limit: number,
}

export type Filters = 'rating' | 'release date';
export type SearchType = 'genre' | 'title';
