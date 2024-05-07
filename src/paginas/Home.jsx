import { Link } from "../componentes/Link"

export default function Home() {
    return (
      <>
        <h1>Home</h1>
        <p>Podés acceder al resto del contenido haciendo click abajo</p>
        <Link to='/contenido'>Ver contenido</Link>
      </>
    )
}