import estilos from "./Imagens.module.css"
import Image from "next/image"
import ImagemSobre from "../../../../public/sobre-image.jpg"
import ImagemSorveteria from "../../../../public/sorveteria.jpg"

export default function Imagens () {
    return (
        <div>
            <Image src={ImagemSobre}></Image>
            <Image src={ImagemSorveteria}></Image>
        </div>
    )
}