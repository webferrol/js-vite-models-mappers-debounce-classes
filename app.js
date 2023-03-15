import { v4 as getId } from 'uuid'
import { perroToModel, mascotaToModel } from './mascotas/mappers/mascotaToModel'
import { renderMascotas } from './mascotas/presentations/render-mascotas'
import layout from './mascotas/templates/layout.html?raw'

function handleForm (formElement) {
  formElement.addEventListener('submit', e => {
    e.preventDefault()

    const data = {
      name: formElement.name.value.trim(),
      race: formElement.race.value.trim(),
      weight: Number(formElement.weight.value),
      id: getId()
    }

    if (formElement.tipo.value === 'mascota') {
      renderMascotas(mascotaToModel(data), formElement.nextElementSibling)
    } else {
      renderMascotas(perroToModel(data), formElement.nextElementSibling)
    }
  })
}

export function app (root) {
  if (!root) throw new Error('Element not found')
  root.innerHTML = layout
  handleForm(root.querySelector('form'))
}
