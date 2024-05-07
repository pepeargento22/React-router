import './App.css'

import {lazy, Suspense} from 'react'

const LazyHome = lazy(() => import('./paginas/Home.jsx'))
const LazyContenido = lazy(() => import('./paginas/Contenido.jsx'))
const LazyBuscador = lazy(() => import('./paginas/Buscador.jsx'))

import { Router } from './componentes/Router.jsx'
import { Route } from './componentes/Route.jsx'

function App() {

  return (
    <>
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          <Router>
            <Route path='/' Pagina={LazyHome}/>
            <Route path='/contenido' Pagina={LazyContenido}/>
            <Route path='/prueba' Pagina={() => {return <h1>Pagina de prueba</h1>}}/>
            <Route path='/buscar/:query' Pagina={LazyBuscador}/>
          </Router>
          </Suspense>
      </main>
    </>
  )
}

export default App