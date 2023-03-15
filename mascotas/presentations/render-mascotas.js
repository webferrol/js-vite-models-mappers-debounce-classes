/**
 * Renderizado
 * @param {Mascota|Perro} mascota
 * @param {HTMLDivElement} Elemento dond escribir
 */
export function renderMascotas (mascota, element) {
  const { nombre, raza, peso, id } = mascota.getData()
  element.innerHTML = id ? `id: ${id}<br>` : ''
  element.innerHTML += nombre ? `Nombre: ${nombre}<br>` : ''
  element.innerHTML += peso ? `Peso: ${peso}<br>` : ''
  element.innerHTML += raza ? `Raza: ${raza}` : ''
}
