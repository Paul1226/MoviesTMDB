export type Root = {
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};

export type TrendingAll = {
  page: number;
  results: ResultTrending[];
  total_pages: number;
  total_results: number;
};
export type General = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

export type UpComingAll = General & {
  dates: Dates;
};

export type Dates = {
  maximum: string;
  minimum: string;
};

export type Result = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ResultTrending = Result & {
  media_type: string;
};
