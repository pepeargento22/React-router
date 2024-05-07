import { useState, useRef } from 'react'
import { Link } from "../componentes/Link"
import Felix from "../assets/Felix.png"

export default function Contenido() {
    const [rutaBuscador, setRutaBuscador] = useState('/buscar/%20')

    const inputRef = useRef()

    const manejarCambio = () => {
      const nuevaRuta = '/buscar/'+inputRef.current.value
      return setRutaBuscador(nuevaRuta)
    }

    return (
      <>
        <h1>Contenido</h1>
        <div>
          <img src={Felix} alt="Felix FE3H" />
          <p>Bienvenido! Esta pagina es una SPA creada para aprender como utilizar React Router</p>
          <input ref={inputRef}
            onChange={manejarCambio}
            type="text"
            name="buscador"
            id="buscador"
            placeholder="Ingrese símbolos alfanuméricos..." />
          <Link to={rutaBuscador}>Buscar</Link>
          <br />
          <br />
          <Link to='/'>Home</Link>
        </div>
      </>
    )
}