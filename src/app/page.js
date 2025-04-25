import estilos from "./page.module.css";
import Image from "next/image";

// Imports Pagina Inicial
import PaginaInicialCabecalho from "@/components/PaginaInicial/Cabecalho";
import PaginaInicialSobre from "@/components/PaginaInicial/Sobre";

export default function Home() {
    return (
        <main>
            <div>
                <PaginaInicialCabecalho />
                <PaginaInicialSobre />
            </div>
        </main>
    );
}
