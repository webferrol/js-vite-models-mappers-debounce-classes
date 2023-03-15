import { Mascota } from './Mascota'

export class Perro extends Mascota {
  raza
  alimentacion
  peso

  /**
   * Método contructor Datos iniciales de la case Perro
   * @param {Like<Perro>} perroDataLike
   * @param {string} Perro.tipo Ejemplos: cánido, felino ...
   * @param {string} Perro.nombre
   * @param {string} Perro.microchip
   * @param {number} Perro.edad En número entero
   * @param {string} Perro.id Identificador único
   * @param {string} Perro.raza
   * @param {string} Perro.alimentacion
   * @param {number} Perro.peso
   */
  constructor ({
    nombre = 'Desconocido',
    tipo = 'Cánido',
    microchip = '',
    edad = 0,
    sexo = 'f',
    id = '',
    raza = 'desconocida',
    alimentacion = '',
    peso = 0
  }) {
    super({ nombre, tipo, microchip, edad, sexo, id })
    this.raza = raza
    this.alimentacion = alimentacion
    this.peso = peso
  }

  /**
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */
  getData () {
    return {
      ...this,
      id: this.getId()
    }
  }
}
