import { linksApi } from "../../lib/data/DataLinks";
import { type UpComingAll, type Result } from "../../lib/data/DataTypes";

export async function FetchingUpComing(): Promise<Result[]> {
  const urlUpComing = `${linksApi.base}/movie/upcoming${linksApi.key}&language=ex-MX&page=1`;
  let getMoviesUp = {} as UpComingAll;
  let listMovies = [] as Result[];

  try {
    const response = await fetch(urlUpComing);
    const data = await response.json();
    getMoviesUp = data;
    listMovies = getMoviesUp.results.slice(0, 12);
    return listMovies || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
