import estilos from "./SaboresSorvetes.module.css"
import Image from 'next/image'
import SorveteOreo from "../../../../public/sabor-oreo.png"
import SorvetePistache from "../../../../public/sabor-pistache.png"
import SorveteCookieAvela from "../../../../public/sabor-cookies-avela.png"
import SorveteKiwi from "../../../../public/sorbet-kiwi.png"
import SorveteMorango from "../../../../public/sorbet-morango.png"
import SorveteLimao from "../../../../public/sorbet-limao.png"

export default function SaboresSorvetes () {
    return (
            <main className={estilos.main_container}>
                <h2>SABORES DE SORVETE</h2>
                <div className={estilos.cards_container}>
                    <div className={estilos.card}>
                        <Image src={SorveteOreo} alt="Sorvete Oreo" className={estilos.img}></Image>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={SorvetePistache} alt="Sorvete Pistache" className={estilos.img}></Image>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={SorveteCookieAvela} alt="Sorvete Cookie e Avelã" className={estilos.img}></Image>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={SorveteKiwi} alt="Sorvete Kiwi" className={estilos.img}></Image>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={SorveteMorango} alt="Sorvete Morango" className={estilos.img}></Image>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={SorveteLimao} alt="Sorvete Limão" className={estilos.img}></Image>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </main>
    )
}