
import debounce from 'just-debounce-it'
import template from './templates/main-template.html?raw'
import { searchFor } from './use-cases/search-for'

/**
 * Función debounce para evitar el efecto rebote de mostrar resultados al mismo tiempo que se escribe
 */
const handleSearch = debounce(e => {
  searchFor(e.target.closest('form')) // e.target.parentElement es el HTMLFormElement
}, 300)

/**
 * Gestión del formulario de búsqueda de películas
 * @param {HTMLFormElement} formElement
 */
function handleForm (formElement) {
  formElement.addEventListener('submit', e => {
    e.preventDefault()
    searchFor(e.target)
  })

  formElement.addEventListener('input', handleSearch)
}

/**
 * Lanzamiento de la App
 * @param {HTMLDivElement} entryPointElement
 */
export function moviesApp (entryPointElement) {
  entryPointElement.innerHTML = template
  handleForm(entryPointElement.querySelector('form'))
}
