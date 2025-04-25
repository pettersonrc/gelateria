import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/logo.png"
import estilos from "./Topo.module.css"

export default function Topo() {
    return (
        <header className={estilos.topo}>
            <div className={estilos.container_largura}>
                <Image src={Logo} alt="Logo" className={estilos.img}></Image>
                <nav className={estilos.lista_nav}>
                    <Link href="/" className={estilos.links}>Home</Link>
                    <Link href="/sabores" className={estilos.links}>Sabores</Link>
                    <Link href="/sobre" className={estilos.links}>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}