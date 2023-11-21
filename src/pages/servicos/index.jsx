import Aos from 'aos'
import React, { useEffect } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import Background from './../../assets/images/services-1.jpg'
import Consult from './../../assets/images/acapu-2.jpg'
import Support from './../../assets/images/pic-4.jpg'
import Apps from './../../assets/images/pic-5.jpg'

function Servicos() {
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
                                Serviços
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1 ">
                <div className="flex">
                    <div
                        data-aos="fade-right"
                        className="w-full max-lg:hidden"
                        style={{
                            backgroundImage: `url(${Consult})`,
                            backgroundSize: 'cover',
                        }}
                    />
                    <div className="w-full">
                        <div className="m-5">
                            <div className="font-poppins font-bold text-xl">
                                CONSULTORIA DE TI
                            </div>
                            <div>
                                <p className="font-poppins mt-3">
                                    Oferecemos diferentes modalidades de planos
                                    para empresas que precisam de consultoria em
                                    rede, servidores e demais práticas
                                    relacionadas ao ambiente de TI.
                                </p>
                                <div className="w-full h-full hidden max-lg:block mt-5 mb-5">
                                    <div
                                        data-aos="fade-up"
                                        className="h-[150px]"
                                        style={{
                                            backgroundImage: `url(${Consult})`,
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </div>

                                <p className="font-poppins mt-6">
                                    Nossos analistas irão apresentar à sua
                                    empresa as melhores propostas estratégicas
                                    para que você encontre caminhos para moldar
                                    novos negócios por meio da tecnologia.
                                </p>
                                <p className="font-poppins mt-6">
                                    A{' '}
                                    <span className="text-main-700 font-bold">
                                        ACAPU TECNOLOGIA
                                    </span>{' '}
                                    também promove a otimização de processos de
                                    informática, conforme as necessidades da sua
                                    empresa.
                                </p>
                                <p className="font-poppins mt-6">
                                    Rígidos processos de seleção e treinamento
                                    que garantem a alocação dos melhores
                                    talentos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-default-800 text-white">
                <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1 pt-5 pb-5 max-lg:pb-0 max-lg:pt-0">
                    <div className="flex">
                        <div className="w-full">
                            <div className="m-5">
                                <div className="font-poppins font-bold text-xl">
                                    SUPORTE TÉCNICO
                                </div>
                                <div>
                                    <p className="font-poppins mt-3">
                                        Para que os seus projetos apresentem
                                        alta performance, você precisa de uma
                                        equipe de informática confiável e
                                        altamente especializada, que cuide da
                                        sua empresa de forma eficaz e ágil.
                                    </p>

                                    <div className="w-full h-full hidden max-lg:block mt-5 mb-5">
                                        <div
                                            data-aos="fade-up"
                                            className="h-[150px]"
                                            style={{
                                                backgroundImage: `url(${Support})`,
                                                backgroundSize: 'cover',
                                            }}
                                        />
                                    </div>

                                    <p className="font-poppins mt-6">
                                        Nossa expertise é oferecer às empresas
                                        planejamentos de redução de custos e
                                        aumento de eficiência em gestão de
                                        problemas técnicos.
                                    </p>
                                    <p className="font-poppins mt-6">
                                        Conte com uma equipe de profissionais
                                        ágeis e assertivos. Possuímos centro
                                        técnico preparado para reparar todos os
                                        tipos de produtos de informática,
                                        nacionais ou internacionais.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="w-full max-lg:hidden"
                            style={{
                                backgroundImage: `url(${Support})`,
                                backgroundSize: 'cover',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1 ">
                <div className="flex border border-transparent">
                    <div
                        data-aos="fade-up"
                        className="w-full max-lg:hidden"
                        style={{
                            backgroundImage: `url(${Apps})`,
                            backgroundSize: 'cover',
                        }}
                    />
                    <div className="w-full">
                        <div className="m-5">
                            <div className="font-poppins font-bold text-xl">
                                APLICATIVOS MULTIPLATAFORMAS
                            </div>
                            <div>
                                <p className="font-poppins mt-3">
                                    É um programa ou sistema que pode ser
                                    executado em mais do que uma plataforma, que
                                    executa programas ou sistemas de mais de uma
                                    plataforma.
                                </p>
                                <div className="w-full h-full hidden max-lg:block mt-5 mb-5">
                                    <div
                                        data-aos="fade-right"
                                        className="h-[150px]"
                                        style={{
                                            backgroundImage: `url(${Apps})`,
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </div>

                                <p className="font-poppins mt-6">
                                    Desenvolvemos através de um framework e que
                                    são compatíveis com a maioria dos sistemas
                                    operacionais existentes (Android, iOS,
                                    Windows Phone, BlackBerry etc).
                                </p>
                                <p className="font-poppins mt-6">
                                    Funcionamento ambientado para diversos
                                    canais diferentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Servicos
