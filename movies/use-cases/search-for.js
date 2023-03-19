import { getMovies } from '../helpers/getMovies'
import { renderError, renderMovies } from '../views'
import { loading } from './loading'
/**
 * Búscador de películas
 * @param {HTMLFormElement} object
 * @param {HTMLInputElement} object.search
 */
let currentPage = 0
export async function searchFor ({ search }, isPaginated = false) {
  if (!isPaginated) currentPage = 0
  const url = `${import.meta.env.VITE_BASE_URL}/?i=tt3896198&apikey=${import.meta.env.VITE_APIKEY}&page=${++currentPage}&s=${search?.value.trim()}`

  try {
    loading(true)
    const { Response, MovieError, Search } = await getMovies(url) // fetching de datos
    if (Response === 'False') throw new Error(MovieError)

    renderMovies(Search, currentPage)
  } catch (error) {
    renderError(error.message)
  } finally {
    loading(false)
  }
}
