import { linksApi } from "../../lib/data/DataLinks";
import { type General, type Result } from "../../lib/data/DataTypes";

export async function FetchingPopulars(): Promise<Result[]> {
  const urlApi = `${linksApi.base}/movie/popular${linksApi.key}&language=en-US&page=1`;
  let infoMovies = {} as General;
  let moviesShort = [] as Result[];

  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    infoMovies = data;
    moviesShort = infoMovies.results.slice(0, 12);
    return moviesShort || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
