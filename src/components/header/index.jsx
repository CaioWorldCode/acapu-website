import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsEnvelope, BsTelephone, BsClock } from 'react-icons/bs'
import { TiThMenuOutline } from 'react-icons/ti'

import Logo from './../../assets/images/brand-logo-white.png'
import LogoBlack from './../../assets/images/brand-logo-black.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <React.Fragment>
            <div className="block sm:block md:hidden lg:hidden xl:hidden">
                <div className=" h-[70px] bg-default-900 ">
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className=" w-[85%]">
                            <div className=" flex flex-row gap-3 justify-start items-center p-2">
                                <img
                                    src={Logo}
                                    alt=""
                                    className="object-contain w-[50px]"
                                />

                                <div className="text-white font-poppins font-bold text-2xl mt-3">
                                    ACAPU
                                </div>
                            </div>
                        </div>

                        <div className=" w-[15%] flex justify-center items-center ">
                            <TiThMenuOutline className="text-white text-[35px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:hidden md:block lg:block xl:block ">
                <div className=" h-[140px] bg-default-900  shadow-bottom ">
                    <div className="h-[50px] bg-default-800">
                        <div className="h-full mx-auto container">
                            <div className="h-full flex justify-end items-center gap-10">
                                {/* CONTACT */}

                                <div className=" transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-center items-center">
                                    <BsEnvelope className="text-main-400" />
                                    contato@acapu.com.br
                                </div>

                                <div className="transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-center items-center">
                                    <BsTelephone className="text-main-400" />
                                    +55 11 0000-0000
                                </div>

                                <div className="max-lg:hidden transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-center items-center">
                                    <BsClock className="text-main-400" />
                                    Atendimento das 09h às 18h
                                </div>

                                {/* CONTACT */}

                                {/* SOCIAL MEDIA  */}
                                <div className="flex flex-row gap-2">
                                    <div className="text-default-base text-[22px] cursor-pointer hover:text-default-300 transition-all">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="text-default-base text-[22px] cursor-pointer hover:text-default-300 transition-all">
                                        <FaFacebook />
                                    </div>
                                    <div className="text-default-base text-[22px] cursor-pointer hover:text-default-300 transition-all">
                                        <FaInstagram />
                                    </div>
                                    <div className="text-default-base text-[22px] cursor-pointer hover:text-default-300 transition-all">
                                        <FaXTwitter />
                                    </div>
                                </div>
                                {/* SOCIAL MEDIA  */}
                            </div>
                        </div>
                    </div>

                    <div className="h-[90px] mx-auto container">
                        <div className="flex h-full">
                            <div className="w-[40%]  max-xl:hidden  flex justify-center items-center ">
                                <div
                                    className="bg-main-500  min-w-[170px] absolute top-0 h-[140px] clip-hexagon"
                                    style={{
                                        clipPath:
                                            'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                                    }}
                                >
                                    <div className="flex justify-center items-center h-full flex-col gap-2">
                                        <img
                                            src={LogoBlack}
                                            alt=""
                                            className="object-contain w-[80px]"
                                        />
                                        <div className="text-black font-bold uppercase text-2xl">
                                            ACAPU
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[60%] max-xl:w-[100%] flex justify-end max-xl:justify-start items-center gap-5 ">
                                <div className="p-1 m-1 hidden max-xl:block">
                                    <div className="flex justify-center items-center h-full flex-col gap-2  bg-main-500 rounded-lg p-1">
                                        <img
                                            src={LogoBlack}
                                            alt=""
                                            className="object-contain w-[50px]"
                                        />
                                        <div className="text-black font-bold uppercase text-xl">
                                            ACAPU
                                        </div>
                                    </div>
                                </div>
                                {/* MENU */}
                                <Link
                                    to={'/'}
                                    className="cursor-pointer transition-all hover:text-main-500 uppercase text-white font-poppins font-bold p-2 max-lg:text-sm"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={'/sobre'}
                                    className="cursor-pointer transition-all hover:text-main-500 uppercase text-white font-poppins font-bold p-2 max-lg:text-sm"
                                >
                                    Sobre
                                </Link>
                                <Link
                                    to={'/servicos'}
                                    className="cursor-pointer transition-all hover:text-main-500 uppercase text-white font-poppins font-bold p-2 max-lg:text-sm"
                                >
                                    Serviços
                                </Link>
                                <Link
                                    to={'/contato'}
                                    className="cursor-pointer transition-all hover:text-main-500 uppercase text-white font-poppins font-bold p-2 max-lg:text-sm"
                                >
                                    Contato
                                </Link>
                                <Link
                                    to={'/privacidade'}
                                    className="cursor-pointer transition-all hover:text-main-500 uppercase text-white font-poppins font-bold p-2 max-lg:text-sm"
                                >
                                    Privacidade
                                </Link>
                                <Link
                                    to={'/portal'}
                                    className="max-lg:text-xs  uppercase text-black font-poppins font-medium p-3 bg-main-500 rounded-lg text-sm transition-all cursor-pointer hover:bg-main-600"
                                >
                                    Acesso cliente
                                </Link>
                                {/* MENU */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
