
import debounce from 'just-debounce-it'
import template from './templates/main-template.html?raw'
import { searchFor } from './use-cases/search-for'

/**
 * Función debounce para evitar el efecto rebote de mostrar resultados al mismo tiempo que se escribe
 */
const handleSearch = debounce(e => {
  searchFor(e.target.closest('form'), false) // e.target.parentElement es el HTMLFormElement
}, 300)

/**
 * Gestión del formulario de búsqueda de películas
 * @param {HTMLFormElement} formElement
 */
function handleForm (formElement) {
  formElement.addEventListener('submit', e => {
    e.preventDefault()
    searchFor(e.target, false)
  })
  formElement.addEventListener('input', handleSearch)
}

/**
 * Páginación básica
 * @param {HTMLFormElement} formElement
 */
function handlePage (formElement) {
  formElement.querySelector('#next').addEventListener('click', e => {
    e.preventDefault()
    searchFor(formElement, true)
  })
}

/**
 * Lanzamiento de la App
 * @param {HTMLDivElement} entryPointElement
 */
export function moviesApp (entryPointElement) {
  entryPointElement.innerHTML = template
  handleForm(entryPointElement.querySelector('form'))
  handlePage(entryPointElement.querySelector('form'))
}
