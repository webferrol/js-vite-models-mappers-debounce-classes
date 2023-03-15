/* eslint-disable accessor-pairs */
export class Mascota {
  #id = 1
  tipo = 'Sin definir'
  nombre = 'Sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0

  /**
   * Método constructor donde cargo mascota
   * @param {Like<Mascota>} macotaUserLike
   * @param {string} Mascota.tipo Ejemplos: cánido, felino ...
   * @param {string} Mascota.nombre
   * @param {string} Mascota.microchip
   * @param {number} Mascota.edad En número entero
   * @param {string} Mascota.id Identificador único
   */

  constructor ({
    nombre = 'Desconocido',
    tipo = 'Cánido',
    microchip = '',
    edad = 0,
    sexo = 'f',
    id = ''
  }) {
    this.#id = id
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.microchip = microchip
  }

  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} nombre - Nombre de la mascota
   */
  setNombre (nombreValue) {
    if (typeof nombreValue === 'string' && nombreValue.length) this.nombre = nombreValue
    else throw new Error(`Formato no válido ${nombreValue}`)
  }

  /**
   * @param {number} edadValue
   */
  setEdad (edadValue) {
    if (Number.isInteger(Number(edadValue))) this.edad = edadValue
  }

  getId () {
    return this.#id
  }

  /**
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */
  getData () {
    return {
      ...this,
      id: this.#id
    }
  }
}
