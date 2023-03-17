/**
 * Realizar un fetching de datos para obtner un listado de películas
 * @param {string} url
 * @returns {object} { Response = true | false, Error = string, Search = Array<object> }
 */
export async function getMovies (url) {
  const response = await fetch(url)
  const data = await response.json()
  const { Response, Error, Search } = data
  return {
    Response,
    MovieError: Error,
    Search
  }
}
