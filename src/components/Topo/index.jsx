import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/logo.png"
import estilos from "./Topo.module.css"

export default function Topo() {
    return (
        <header>
            <div>
                <Image src={Logo} alt="Logo"></Image>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/sabores">Sabores</Link>
                    <Link href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}