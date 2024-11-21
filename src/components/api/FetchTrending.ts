import { linksApi } from "../../lib/data/DataLinks";
import {
  type TrendingAll,
  type ResultTrending,
} from "../../lib/data/DataTypes";

export async function FetchingTrending(): Promise<ResultTrending[]> {
  const urlTrending = `${linksApi.base}/trending/movie/day${linksApi.key}`;
  let getMovies = {} as TrendingAll;
  let listMovies = [] as ResultTrending[];

  try {
    const response = await fetch(urlTrending);
    const data = await response.json();
    getMovies = data;
    listMovies = getMovies.results.slice(0, 12);
    return listMovies || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
