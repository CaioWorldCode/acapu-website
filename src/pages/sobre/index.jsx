import React, { useEffect } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import Background from './../../assets/images/pic-7.jpg'
import Acapu1 from '../../assets/images/home-1.jpg'
import Acapu2 from '../../assets/images/home-2.jpg'
import Acapu3 from '../../assets/images/home-3.jpg'
import Aos from 'aos'

export default function Sobre() {
    useEffect(function () {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <React.Fragment>
            <Header />

            <div className="h-[200px] max-lg:h-[100px] relative">
                <div
                    className="h-[200px] max-lg:h-[100px] z-10"
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                    }}
                />

                <div className="absolute z-20 h-[200px] max-lg:h-[100px] w-full top-0 bg-black bg-opacity-60">
                    <div className="container mx-auto h-full">
                        <div className="flex justify-center items-center h-full">
                            <div className="text-white font-popppins uppercase font-extrabold text-[50px] max-lg:text-[20px]">
                                Sobre
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1 ">
                <div className="flex h-full">
                    <div className="w-[50%] max-lg:hidden">
                        <div className="flex h-full">
                            <div
                                data-aos="flip-left"
                                data-aos-delay="100"
                                className="h-full w-full z-10  "
                                style={{
                                    backgroundImage: `url(${Acapu1})`,
                                    backgroundSize: 'cover',
                                    clipPath:
                                        'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                                }}
                            />
                            <div
                                data-aos="flip-left"
                                data-aos-delay="400"
                                className="h-full w-full z-10 "
                                style={{
                                    backgroundImage: `url(${Acapu2})`,
                                    backgroundSize: 'cover',
                                    clipPath:
                                        'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                                }}
                            />
                            <div
                                data-aos="flip-left"
                                data-aos-delay="700"
                                className="h-full w-full z-10 "
                                style={{
                                    backgroundImage: `url(${Acapu3})`,
                                    backgroundSize: 'cover',
                                    clipPath:
                                        'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-[50%] max-lg:w-[100%] h-full m-10">
                        <div className="font-bold font-poppins text-3xl">
                            ACAPU
                        </div>
                        <p className="font-poppins mt-3">
                            Há mais de 20 anos, a Acapu Tecnologia vem crescendo
                            no mercado, sempre focada na entrega de soluções de
                            alta qualidade para nossos clientes.{' '}
                        </p>
                        <p className="font-poppins mt-6">
                            Estamos sempre antenados nas novas tecnologias e
                            ferramentas disponíveis no mercado para que possamos
                            utilizá-las da melhor maneira em nossa empresa para
                            alcançar resultados satisfatórios.
                        </p>
                        <p className="font-poppins mt-6">
                            A{' '}
                            <span className="font-bold text-main-500">
                                Acapu Tecnologia
                            </span>{' '}
                            é uma empresa exclusivamente nacional e foi criada
                            com o objetivo de oferecer soluções integradas de
                            infraestrutura nas áreas de engenharia elétrica e
                            telecomunicações, sempre acompanhando às
                            necessidades do mercado e desenvolvimento soluções
                            de infraestrutura elétrica, lógica e comunicação de
                            dados.
                        </p>

                        <p className="font-poppins mt-6">
                            Provedora de soluções na área de TI, dona de
                            conceitos de qualidade e padronização, é formada por
                            uma equipe de profissionais preparados para atuar
                            nos mais diversos ambientes, plataformas e passando
                            então a oferecer soluções completas de
                            infraestrutura na área de informática.
                        </p>

                        <div className="hidden max-lg:block">
                            <p className="font-poppins mt-6">
                                Por meio de uma política de melhoria contínua, e
                                visando atender da melhor forma possível as
                                necessidades de seus clientes, a Acapu
                                Tecnologia estendeu sua área de atuação,
                                oferecendo ainda soluções de automação,
                                segurança e auditoria, além de abranger também a
                                área de construção civil.
                            </p>

                            <p className="font-poppins mt-6">
                                Contando com uma equipe de profissionais
                                altamente capacitada, a Acapu Informática
                                fornece a seus clientes uma ampla gama de
                                serviços, garantindo sempre a qualidade e o alto
                                desempenho de suas soluções.
                            </p>

                            <p className="font-poppins mt-6">
                                Tudo com a melhor garantia e certificação dos
                                principais fabricantes de cabeamento
                                estruturado, além do melhor suporte técnico e
                                pós-instalação do mercado.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block max-lg:hidden">
                    <p className="font-poppins mt-6">
                        Por meio de uma política de melhoria contínua, e visando
                        atender da melhor forma possível as necessidades de seus
                        clientes, a Acapu Tecnologia estendeu sua área de
                        atuação, oferecendo ainda soluções de automação,
                        segurança e auditoria, além de abranger também a área de
                        construção civil.
                    </p>

                    <p className="font-poppins mt-6">
                        Contando com uma equipe de profissionais altamente
                        capacitada, a Acapu Informática fornece a seus clientes
                        uma ampla gama de serviços, garantindo sempre a
                        qualidade e o alto desempenho de suas soluções.
                    </p>

                    <p className="font-poppins mt-6">
                        Tudo com a melhor garantia e certificação dos principais
                        fabricantes de cabeamento estruturado, além do melhor
                        suporte técnico e pós-instalação do mercado.
                    </p>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}
