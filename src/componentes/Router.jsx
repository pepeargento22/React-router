import { useEffect, useState, Children } from 'react'
import { match } from 'path-to-regexp'
import { EVENTOS } from '../constantes.js'
import Pagina404 from '../paginas/Pagina404.jsx'

export function Router({children, rutas = [], componenteDefault: ComponenteDefault = Pagina404}) {
    const [pathnameActual, setPathnameActual] = useState(window.location.pathname)

    useEffect(() => {
        const cambioPathname = () => {
            setPathnameActual(window.location.pathname)
        }
        window.addEventListener(EVENTOS.PUSHSTATE, cambioPathname)
        window.addEventListener(EVENTOS.POPSTATE, cambioPathname) 
        return () => {
            window.removeEventListener(EVENTOS.PUSHSTATE, cambioPathname)
            window.removeEventListener(EVENTOS.POPSTATE, cambioPathname)
        }
    },[])

    const rutasDeChildren = Children.map(children, ({props, type}) => {
        const {name} = type
        const esRoute = name == 'Route'
        return esRoute ? props : null 
    })
    const rutasObtenidas = rutas.concat(rutasDeChildren).filter(Boolean)

    let paramsRuta = {}
    const compararPathname = ({path}) => {
       if (path == pathnameActual) return true   
       const matcherUrl = match(path, {decode: decodeURIComponent}) 
       const hayMatch = matcherUrl(pathnameActual) 
       if (!hayMatch) return false
       paramsRuta = hayMatch.params
       return true 
    }
    const PaginaRenderizar = rutasObtenidas.find(compararPathname)?.Pagina

    return (
        PaginaRenderizar ? <PaginaRenderizar paramsRuta={paramsRuta}/> : <ComponenteDefault paramsRuta={paramsRuta}/>
    )
}