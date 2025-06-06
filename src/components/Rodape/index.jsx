import Image from "next/image"
import estilos from "./Rodape.module.css"
import Logo from "../../../public/logo.png"

export default function Rodape () {
    return (
        <div className={estilos.main_container}>
            <div className={estilos.container_rodape}>
                <Image src={Logo} alt="Logo" className={estilos.img}></Image>
                <div className={estilos.subcontainer}>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className={estilos.subcontainer}>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890
                    </p>
                </div>
                <div className={estilos.subcontainer}>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={estilos.container_direito_autoral}>
                <p>Gelateria. Orgulhosamente desenvolvido por Petterson Rodolpho</p>
            </div>
        </div>
    )
}