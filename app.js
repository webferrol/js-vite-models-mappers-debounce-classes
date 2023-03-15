import layout from './templates/layout.html?raw'

function handleForm (formElement) {
  let data = {}
  formElement.addEventListener('submit', e => {
    e.preventDefault()
    data = {
      test: formElement.test.value
    }
    console.log(data)
  })
}

export function app (root) {
  if (!root) throw new Error('Element not found')
  root.innerHTML = layout
  handleForm(root.querySelector('form'))
}
