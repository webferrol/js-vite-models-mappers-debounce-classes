
import template from './templates/main-template.html?raw'
import { searchFor } from './use-case/search-for'

/**
 * Gestión del formulario de búsqueda de películas
 * @param {HTMLFormElement} formElement
 */
function handleForm (formElement) {
  formElement.addEventListener('submit', e => {
    e.preventDefault()
    searchFor(e.target)
  })
}

/**
 * Lanzamiento de la App
 * @param {HTMLDivElement} entryPointElement
 */
export function moviesApp (entryPointElement) {
  entryPointElement.innerHTML = template
  handleForm(entryPointElement.querySelector('form'))
}
