import { BsTelephone } from 'react-icons/bs'
import React from 'react'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'
import { IoMail } from 'react-icons/io5'

import FooterBg from './../../assets/images/footer-bg-info.jpg'
import Logo from './../../assets/images/brand-logo-white.png'
import FooterBackground from './../../assets/images/bg.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <React.Fragment>
            <div className="pt-[70px] max-xl:mt-[130px]">
                <div
                    className="bg-default-800 min-h-[340px] border border-transparent "
                    style={{
                        backgroundImage: `url(${FooterBackground})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="mx-auto container">
                        <div className="border border-transparent max-xl:p-2">
                            <div
                                className="flex justify-center mt-[-70px] max-xl:mt-[-130px] w-full "
                                style={{
                                    backgroundImage: `url(${FooterBg})`,
                                    backgroundSize: 'cover',
                                }}
                            >
                                <div className="w-[100%] bg-main-500 bg-opacity-80 h-[140px] max-xl:h-[260px]">
                                    <div className="h-full flex z-20 max-xl:flex-col max-xl:justify-center max-xl:gap-5">
                                        <div className="w-[60%] max-xl:w-[100%]">
                                            <div className="flex flex-col gap-2 justify-center  items-start h-full ">
                                                <div className="ml-10 font-poppins font-medium  text-default-800 text-[22px] max-xl:text-[18px]">
                                                    Precisando de ajuda?
                                                </div>

                                                <h2 className="ml-10 font-poppins font-bold text-default-800 text-3xl max-xl:text-2xl max-xl:mr-10">
                                                    Nós temos a solução ideal
                                                    para seu negócio.
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="w-[40%] max-xl:w-[100%]">
                                            <div className="flex justify-center items-center max-xl:items-start max-xl:ml-10 flex-col gap-2 h-full">
                                                <div className=" bg-default-700 p-2 rounded-lg text-white font-poppins font-light hover:bg-default-800 transition-all cursor-pointer">
                                                    Fale com nossos consultores
                                                </div>
                                                <div className="flex justify-center items-center gap-2">
                                                    <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                                        <BsTelephone className="w-[25px] h-[25px] text-main-800" />
                                                    </div>

                                                    <div className=" font-poppins font-medium text-xl text-default-800">
                                                        +55 (11) 00000-0000
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-xl:m-2 mt-8">
                            <div className="flex max-xl:flex-col">
                                {/* LOGO */}
                                <div className="w-[30%] max-xl:w-[100%] flex justify-center items-center flex-col">
                                    <div className="w-[150px] h-[120px] flex justify-center items-center flex-col gap-3">
                                        <img
                                            src={Logo}
                                            alt=""
                                            className="object-contain w-[80px]"
                                        />

                                        <div className="text-white font-bold uppercase text-2xl">
                                            ACAPU
                                        </div>
                                    </div>

                                    <div className=" p-2  ml-5 mr-5 font-poppins text-default-400 font-light text-center">
                                        Inspirando inovação, transformando
                                        desafios em soluções.
                                    </div>
                                </div>
                                {/* LOGO */}
                                <div className="w-[100%] ">
                                    <div className="flex max-xl:flex-col">
                                        <div className="w-full">
                                            <div className="flex flex-col p-2">
                                                <div className="text-white font-poppins font-bold text-xl flex justify-start  items-center w-full pl-6 mb-3">
                                                    ACAPU
                                                </div>
                                                <div className="border-transparent ">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Sobre
                                                    </span>
                                                </div>
                                                <div className="border-transparent ">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Institucional
                                                    </span>
                                                </div>
                                                <div className="border-transparent ">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Contato
                                                    </span>
                                                </div>
                                                <div className="border-transparent ">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Trabalhe conosco
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <div className="flex flex-col p-2 max-xl:mt-5">
                                                <div className="uppercase text-white font-poppins font-bold text-xl flex justify-start items-center w-full pl-6 mb-3">
                                                    Serviços
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Consultoria de TI
                                                    </span>
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Outsourcing
                                                    </span>
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Desenvolvimento de apps
                                                    </span>
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Gerenciamento de redes
                                                    </span>
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-poppins text-xl cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <VscDebugBreakpointLogUnverified className="text-main-500" />
                                                        Suporte técnico
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full ">
                                            <div className="max-xl:mt-5 uppercase text-white font-poppins font-bold text-xl flex justify-start items-center w-full pl-6 mb-3">
                                                Contato
                                            </div>

                                            <div className="max-xl:ml-6 max-xl:mb-5">
                                                <div className="border-transparent">
                                                    <span className="text-white font-light font-poppins  cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <IoMail className="text-main-500" />
                                                        comercial@acapu.com.br
                                                    </span>
                                                </div>

                                                <div className="border-transparent">
                                                    <span className="text-white font-light font-poppins  cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <IoMail className="text-main-500" />
                                                        contato@acapu.com.br
                                                    </span>
                                                </div>

                                                <div className="mt-5 border-transparent">
                                                    <span className="text-white font-light font-poppins  cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <BsTelephone className="text-main-500" />
                                                        +55 (11) 00000-0000
                                                    </span>
                                                </div>
                                                <div className="border-transparent">
                                                    <span className="text-white font-light font-poppins  cursor-pointer hover:text-main-500 transition-all flex items-center gap-1">
                                                        <BsTelephone className="text-main-500" />
                                                        +55 (11) 00000-0000
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-default-900 h-[50px] max-xl:h-[100px]">
                    <div className="container mx-auto h-full">
                        <div className="h-full flex justify-center items-center max-xl:flex-col">
                            <div className="w-[50%] max-xl:w-[100%]">
                                <div className="flex gap-5 max-xl:justify-center">
                                    <Link
                                        to="/privacidade"
                                        className="text-white font-light font-poppins cursor-pointer transition-all hover:text-main-500"
                                    >
                                        Políticas de privacidade
                                    </Link>
                                    <div className="text-default-400">|</div>
                                    <Link
                                        to={'/cookies'}
                                        className="text-white font-light font-poppins cursor-pointer transition-all hover:text-main-500"
                                    >
                                        Políticas de cookies
                                    </Link>
                                </div>
                            </div>
                            <div className="font-poppins w-[50%] max-xl:w-[100%] flex justify-end max-xl:justify-center items-center text-white font-extralight">
                                © 2023 Acapu. Todos os direitos reservados.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
