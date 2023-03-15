import { Mascota, Perro } from '../models'

export function mascotaToModel (data) {
  const { name, id } = data
  return new Mascota({ nombre: name, id })
}

export function perroToModel (data) {
  const { name, race, weight, id } = data
  return new Perro({ nombre: name, peso: weight, raza: race, id })
}
