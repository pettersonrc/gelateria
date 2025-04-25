import estilos from "./Cabecalho.module.css"

export default function Cabecalho () {
    return (
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>A GELATERIA</h1>
        </div>
    )
}