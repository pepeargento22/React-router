import { Link } from "../componentes/Link"
import './Pagina404.css'

export default function Pagina404() {
    return (
        <>
        <section>
            <h1>Page not found</h1>
            <Link to='/'>Home</Link>
        </section>
        </>
    )
}