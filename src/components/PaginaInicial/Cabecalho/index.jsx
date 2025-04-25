import estilos from "./Cabecalho.module.css"
import Image from "next/image"

export default function Cabecalho () {
    return (
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>SORVETE ARTESANAL</h1>
        </div>
    )
}