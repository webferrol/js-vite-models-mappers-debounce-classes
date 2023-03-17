import { getMovies } from '../helpers/getMovies'
import { renderError, renderMovies } from '../views'

/**
 * Búscador de películas
 * @param {HTMLFormElement} object
 * @param {HTMLInputElement} object.search
 */
export async function searchFor ({ search }) {
  const url = `${import.meta.env.VITE_BASE_URL}/?i=tt3896198&apikey=${import.meta.env.VITE_APIKEY}&s=${search?.value.trim()}`

  try {
    document.querySelector('button').setAttribute('aria-busy', true)
    const { Response, MovieError, Search } = await getMovies(url) // fetching de datos
    if (Response === 'False') throw new Error(MovieError)
    renderMovies(Search)
  } catch (error) {
    renderError(error.message)
  } finally {
    document.querySelector('button').removeAttribute('aria-busy')
  }
}
