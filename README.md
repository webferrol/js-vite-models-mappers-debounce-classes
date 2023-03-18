# Mascotas

## Instrucciones

Deja los comentarios del __main.js__ como el código siguiente

```js
import '@picocss/pico'
import './style.css'
// import { MascotasApp } from './mascotas/mascotas-app'
import { moviesApp } from './movies/movies-app'

MascotasApp(document.querySelector('#app'))

// const app = document.querySelector('#app')
// if (!app) throw new Error('Entry point not found')
// moviesApp(app)
```

# Buscador de películas

## Instrucciones

Deja los comentarios del __main.js__ como el código siguiente

```js
import '@picocss/pico'
import './style.css'
// import { MascotasApp } from './mascotas/mascotas-app'
import { moviesApp } from './movies/movies-app'

// MascotasApp(document.querySelector('#app'))

const app = document.querySelector('#app')
if (!app) throw new Error('Entry point not found')
moviesApp(app)
```