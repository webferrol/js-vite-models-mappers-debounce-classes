import '@picocss/pico'
import './style.css'
// import { MascotasApp } from './mascotas/mascotas-app'
import { moviesApp } from './movies/movies-app'

// MascotasApp(document.querySelector('#app'))

const app = document.querySelector('#app')
if (!app) throw new Error('Entry point not found')
moviesApp(app)
