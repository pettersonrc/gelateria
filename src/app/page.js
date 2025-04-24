import estilos from "./page.module.css";
import Image from "next/image";

// Imports Pagina Inicial
import PaginaInicialCabecalho from "@/components/PaginaInicial/Cabecalho";
import PaginaInicialNossosSabores from "@/components/PaginaInicial/NossosSabores";
import PaginaInicialNossosEventos from "@/components/PaginaInicial/NossosEventos";
import PaginaInicialSobreNos from "@/components/PaginaInicial/SobreNos";

export default function Home() {
    return (
        <main>
            <div>
                <PaginaInicialCabecalho />
                <PaginaInicialNossosSabores />
                <PaginaInicialNossosEventos />
                <PaginaInicialSobreNos />
            </div>
        </main>
    );
}
