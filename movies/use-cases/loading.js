/**
 * Creación de una barra de progreso
 * @param {HTMLFormElement} parentElement
 * @returns {HTMLProgressElement}
 */
function createProgressBar (parentElement) {
  const progressBar = document.createElement('progress')
  progressBar.id = 'progress-movies'
  parentElement.append(progressBar)
  return progressBar
}

export function loading (isLoading = true) {
  const progress = document.querySelector('#progress-movies') || createProgressBar(document.querySelector('form'))

  if (isLoading) {
    progress.classList.remove('oculto')
    document.querySelector('button').setAttribute('aria-busy', true)
  } else {
    progress.classList.add('oculto')
    document.querySelector('button').removeAttribute('aria-busy')
  }
}
