
import template from './templates/main-template.html?raw'
import movies from './mocks/movies.json'
import error from './mocks/error.json'

function renderError (element) {
  element.innerHTML = error.Error
}

function getMovies (element, data = movies) {
  element.innerHTML = ''
  if (data.Response === 'False') {
    renderError(element)
    return
  }
  const { Search } = data
  const figuresValue = Search.map(movie => `
  <figure>
    <img src="${movie.Poster}" alt="${movie.Type}">
    <figcaption>${movie.Title} <time>${movie.Year}</time></figcaption>
  </figure>
  `)
  element.innerHTML += figuresValue.join('')
}

export function moviesApp (root) {
  if (!root) throw new Error('Element not found')
  root.innerHTML = template
  root.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const data = Math.trunc(Math.random() * 5) > 2 ? movies : error
    getMovies(root.querySelector('.my-grid'), data)
  })
}
