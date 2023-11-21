import React, { useState } from 'react'
import {
    FaLinkedinIn,
    FaFacebook,
    FaInstagram,
    FaInfoCircle,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsEnvelope, BsTelephone, BsClock } from 'react-icons/bs'
import { GoHomeFill } from 'react-icons/go'
import { CgMenu } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { MdMiscellaneousServices, MdSecurity } from 'react-icons/md'
import { IoMdApps, IoMdContact } from 'react-icons/io'

import Logo from './../../assets/images/brand-logo-white.png'
import LogoBlack from './../../assets/images/brand-logo-black.png'
import { Drawer } from '@material-tailwind/react'

function Header() {
    const [open, setOpen] = useState(false)

    const openDrawer = () => {
        setOpen(open ? false : true)
    }
    const closeDrawer = () => setOpen(false)

    const menu = [
        {
            name: 'Home',
            slug: 'home',
            icon: <GoHomeFill />,
            route: '/',
        },
        {
            name: 'Sobre',
            slug: 'about',
            icon: <FaInfoCircle />,
            route: '/sobre',
        },
        {
            name: 'Serviços',
            slug: 'services',
            icon: <MdMiscellaneousServices />,
            route: '/servicos',
        },
        {
            name: 'Contato',
            slug: 'contact',
            icon: <IoMdContact />,
            route: '/contato',
        },
        {
            name: 'Privacidade',
            slug: 'privacy',
            icon: <MdSecurity />,
            route: '/privacidade',
        },
    ]

    return (
        <React.Fragment>
            <Drawer
                open={open}
                onClose={closeDrawer}
                className="bg-default-900 z-[1000] w-[100vw] shadow-2xl"
            >
                <div className="mb-3 flex items-center justify-center w-full p-4">
                    <Link
                        to={'/'}
                        className="flex justify-center items-center h-full flex-row gap-2"
                    >
                        <img
                            src={Logo}
                            alt=""
                            className="object-contain w-[80px]"
                        />
                        <div className="text-white font-bold uppercase text-2xl mt-2">
                            ACAPU
                        </div>
                    </Link>
                </div>

                <div className="p-2 flex flex-col gap-2">
                    {menu.map((row, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    to={row.route}
                                    className={`border-2 h-[40px] rounded flex items-center font-poppins ${
                                        location.pathname === row.route
                                            ? 'text-main-500 border-main-500'
                                            : 'text-white border-default-800'
                                    }`}
                                >
                                    <div className="ml-2">{row.icon}</div>
                                    <div className="ml-2">{row.name}</div>
                                </Link>
                            </div>
                        )
                    })}

                    <div className="bg-main-500 p-2 rounded font-poppins text-sm font-normal flex gap-2 items-center mt-5 mb-5">
                        <IoMdApps className="text-[20px]" />
                        Acesso cliente
                    </div>

                    <div className="rounded bg-default-800 p-2">
                        <div className="mt-1 transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-start items-center text-sm">
                            <BsEnvelope className="text-main-400 text-sm" />
                            contato@acapu.com.br
                        </div>

                        <div className="mt-1 transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-start items-center text-sm">
                            <BsTelephone className="text-main-400 text-sm" />
                            +55 11 0000-0000
                        </div>

                        <div className="mt-1 transition-all cursor-pointer text-default-base hover:text-main-600 flex flex-row gap-2 justify-start items-center text-sm">
                            <BsClock className="text-main-400 text-sm" />
                            Atendimento das 09h às 18h
                        </div>
                    </div>

                    <div className="text-center text-[12px] text-default-600 font-poppins">
                        © 2023 Acapu. <br /> Todos os direitos reservados.
                    </div>
                </div>
            </Drawer>

            <div className="block sm:block md:hidden lg:hidden xl:hidden pb-[70px]">
                <div className="fixed z-50 w-full shadow-2xl h-[70px] bg-default-900 ">
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className=" w-[15%] flex justify-center items-center ">
                            <CgMenu
                                className="text-white text-[35px]"
                                onClick={() => openDrawer()}
                            />
                        </div>
                        <div className=" w-[85%]">
                            <Link
                                to={'/'}
                                className=" flex flex-row gap-3 justify-center items-center p-2 "
                            >
                                <img
                                    src={Logo}
                                    alt=""
                                    className="object-contain w-[50px] ml-[-16%]"
                                />
                            </Link>
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
                                <Link
                                    to={'/'}
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
                                </Link>
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
                                {menu.map((row, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            to={row.route}
                                            className={`cursor-pointer transition-all hover:text-main-500 uppercase font-poppins font-bold p-2 max-lg:text-sm ${
                                                location.pathname === row.route
                                                    ? 'text-main-500'
                                                    : 'text-white'
                                            }`}
                                        >
                                            {row.name}
                                        </Link>
                                    )
                                })}

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
