import React, { useState } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Background from './../../assets/images/pic-5.jpg'
import Background2 from './../../assets/images/pic-7.jpg'
import { BsBuildings, BsEnvelope, BsTelephone } from 'react-icons/bs'
import { Input, Typography } from '@material-tailwind/react'
import { GrInstall } from 'react-icons/gr'
import { HiMiniCog8Tooth } from 'react-icons/hi2'

function Contato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
        subscribe: false,
    })

    const handleChange = e => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
    }

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
                                Contato
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1">
                <div className="pt-10 border border-transparent max-xl:p-2 max-lg:hidden">
                    <div
                        className="flex justify-center mt-[-70px] max-xl:mt-[-130px] w-full "
                        style={{
                            backgroundImage: `url(${Background2})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="w-[100%] bg-default-700 bg-opacity-80 h-[140px] max-xl:h-[260px]">
                            <div className="h-full flex z-20 max-xl:flex-col max-xl:justify-center max-xl:gap-5">
                                <div className="w-[100%] max-xl:w-[100%]">
                                    <div className="flex flex-col gap-2 justify-center  items-start h-full ">
                                        <div className="ml-10 font-poppins font-medium  text-white text-[22px] max-xl:text-[18px]">
                                            Fale com um especialista
                                        </div>

                                        <h2 className="ml-10 font-poppins font-bold text-white text-3xl max-xl:text-2xl max-xl:mr-10">
                                            TEMOS A SOLUÇÃO IDEAL!
                                        </h2>
                                    </div>
                                </div>
                                <div className="w-[40%] max-xl:w-[100%]">
                                    <div className="flex justify-center items-center max-xl:items-start max-xl:ml-10 flex-col gap-2 h-full">
                                        <div className="flex justify-center items-center gap-2 mr-[60px]">
                                            <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                                <BsTelephone className="w-[25px] h-[25px] text-main-800" />
                                            </div>

                                            <div className=" font-poppins font-medium text-xl text-white">
                                                +55 (11) 00000-0000
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                                <BsEnvelope className="w-[25px] h-[25px] text-main-800" />
                                            </div>

                                            <div className=" font-poppins font-medium text-xl text-white">
                                                comercial@acapu.com.br
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex max-lg:flex-col mt-5">
                    <div className="w-[40%] max-lg:w-[100%] hidden max-lg:block">
                        <div className="p-5 h-full">
                            <div className="font-poppins font-light text-[15px] text-default-800 m-5">
                                Unimos a inovação da tecnologia à tradição de
                                uma empresa presente no mercado há mais de 20
                                anos. A{' '}
                                <span className="font-bold text-main-700">
                                    ACAPU TECNOLOGIA
                                </span>{' '}
                                presta serviços de suporte técnico, sempre
                                atuando com profissionais altamente
                                especializados.
                                <br />
                            </div>
                            <div className="flex">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <BsBuildings className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        O que a sua empresa precisa?
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Nós podemos te ajudar no gerenciamento e
                                        manutenção dos recursos tecnológicos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-5">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <GrInstall className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        Implantação
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Executamos planos de melhoria para
                                        aumentar a utilização de sistemas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-5">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <HiMiniCog8Tooth className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        Desenvolvimento
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Desenvolvimento e integração de sistemas
                                        com uso de alta tecnologia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[60%] max-lg:w-[100%]">
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-full mx-auto p-5"
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-normal font-poppins text-gray-800"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border border-default-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-normal font-poppins text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border border-default-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-lg font-normal font-poppins text-gray-800"
                                >
                                    Telefone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border border-default-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-lg font-normal font-poppins text-gray-800"
                                >
                                    Descrição
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 p-2 w-full border border-default-300 rounded-md"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleChange}
                                        className="mr-2 "
                                    />
                                    <span className="text-md text-gray-800">
                                        Aceito compartilhar minhas informações
                                        com a{' '}
                                        <span className="text-main-700 uppercase font-poppins font-bold">
                                            Acapu
                                        </span>{' '}
                                        e estou ciente da{' '}
                                        <span className="text-blue-600 cursor-pointer font-semibold transition-all hover:text-blue-900">
                                            Política de Privacidade
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-main-600 text-black min-w-[200px] max-lg:min-w-[100%] px-4 py-2  hover:bg-main-700 font-poppins uppercase font-bold text-lg"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="w-[40%] max-lg:w-[100%] block max-lg:hidden">
                        <div className="p-5 h-full">
                            <div className="font-poppins font-light text-[15px] text-default-800 m-5">
                                Unimos a inovação da tecnologia à tradição de
                                uma empresa presente no mercado há mais de 20
                                anos. A{' '}
                                <span className="font-bold text-main-700">
                                    ACAPU TECNOLOGIA
                                </span>{' '}
                                presta serviços de suporte técnico, sempre
                                atuando com profissionais altamente
                                especializados.
                                <br />
                            </div>
                            <div className="flex">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <BsBuildings className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        O que a sua empresa precisa?
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Nós podemos te ajudar no gerenciamento e
                                        manutenção dos recursos tecnológicos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-5">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <GrInstall className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        Implantação
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Executamos planos de melhoria para
                                        aumentar a utilização de sistemas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-5">
                                <div className="m-2 w-[20%] flex justify-center items-center">
                                    <div className="w-[60px] h-[60px] rounded-full border-[6px] border-main-600 flex justify-center items-center">
                                        <HiMiniCog8Tooth className="text-[25px]" />
                                    </div>
                                </div>
                                <div className="m-2 w-full">
                                    <p className="font-semibold text-[15px] font-poppins text-default-800">
                                        Desenvolvimento
                                    </p>
                                    <p className="font-light text-[13px] font-poppins text-default-800">
                                        Desenvolvimento e integração de sistemas
                                        com uso de alta tecnologia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Contato
