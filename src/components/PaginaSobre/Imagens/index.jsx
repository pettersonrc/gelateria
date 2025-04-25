import estilos from "./Imagens.module.css"

export default function Imagens () {
    return (
        <div className={estilos.container_imagens}>
            <div className={`${estilos.img} ${estilos.img_amigos}`}>

            </div>
            <div className={`${estilos.img} ${estilos.img_sorveteria}`}>

            </div>
        </div>
    )
}