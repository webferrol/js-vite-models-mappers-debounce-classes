export function renderError (error) {
  document.querySelector('.my-grid').innerHTML = `<article aria-errormessage="err1"><strong id ="err1">${error}</strong></article>`
}
