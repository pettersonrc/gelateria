import Image from "next/image"
import estilos from "./Rodape.module.css"
import Logo from "../../../public/logo.png"

export default function Rodape () {
    return (
        <div>
            <Image src={Logo} alt="Logo"></Image>
            <div>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890
                </p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
            <p>Gelateria. Orgulhosamente desenvolvido por Petterson Rodolpho</p>
        </div>
    )
}