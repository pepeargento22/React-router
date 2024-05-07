import { Link } from '../componentes/Link'

export default function Buscador({paramsRuta}) {
    return (
        <>
        <h1>Buscador</h1>
        <br />
        <p>Buscaste <strong><em>{paramsRuta.query}</em></strong></p>
        <Link to='/'>Home</Link>
        <Link className='volver_contenido' to='/contenido'>Volver a buscar</Link>
        </>
    )
}