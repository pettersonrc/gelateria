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
        <main>
            <div>
                <h2></h2>
                <div>
                    <div>
                        <Image src={SorveteOreo}></Image>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div>
                        <Image src={SorvetePistache}></Image>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div>
                        <Image src={SorveteCookieAvela}></Image>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div>
                        <Image src={SorveteKiwi}></Image>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div>
                        <Image src={SorveteMorango}></Image>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div>
                        <Image src={SorveteLimao}></Image>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}