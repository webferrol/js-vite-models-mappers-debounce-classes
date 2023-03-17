export function renderMovies (movies) {
  movies = movies?.map(movie => `
  <figure>
    <img src="${movie?.Poster}" alt="${movie?.Type}">
    <figcaption>${movie?.Title} <time>${movie?.Year}</time></figcaption>
  </figure>
  `)
  if (movies?.length) document.querySelector('.my-grid').innerHTML = movies.join('')
}
