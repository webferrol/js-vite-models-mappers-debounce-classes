/**
 * Realizar un fetching de datos para obtner un listado de películas
 * @param {string} url
 * @returns {object} { Response = true | false, Error = string, Search = Array<object> }
 */
export async function getMovies (url) {
  const response = await fetch(url)
  const data = await response.json()
  const { Response, Error, Search, totalResults } = data
  return {
    MovieError: Error,
    Response,
    Search,
    totalResults,
    pages: totalResults ? Math.ceil(totalResults / 10) : 1
  }
}
