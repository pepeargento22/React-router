import { EVENTOS } from "../constantes"

export function cambioPagina(href) {
    window.history.pushState({}, '', href) 
    const eventoCambio = new Event(EVENTOS.PUSHSTATE)
    window.dispatchEvent(eventoCambio)
}

export function Link({ target, to, ...props }) {    
    const manejarClick = (e) => {
        const eventoEsPrincipal = e.button == '0' 
        const eventoModificado = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const eventoEsManejable = !target || target == '_self'
        if (eventoEsPrincipal && !eventoModificado && eventoEsManejable) {
            e.preventDefault()
            cambioPagina(to)   
        }       
    }
    
    return (
        <a onClick={manejarClick} href={to} target={target} {...props}></a>
    )
}