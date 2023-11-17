import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

import HomeBanner from '../../assets/images/team.jpg'
import HomeBg from '../../assets/images/home-bg.jpg'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Home() {
    useEffect(function () {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <React.Fragment>
            <Header />

            <div className="h-[700px] relative">
                <div
                    className="h-[700px] z-10"
                    style={{
                        backgroundImage: `url(${HomeBg})`,
                        backgroundSize: 'cover',
                    }}
                />

                <div className="absolute z-20 h-[700px] w-full top-0 bg-black bg-opacity-60">
                    <div className="mx-auto container h-full">
                        <div className="flex h-full">
                            <div className=" w-[60%] max-xl:w-[100%] h-full">
                                <div className="flex items-center h-full">
                                    <div className="">
                                        <div className="text-white text-[50px] max-xl:text-[30px] pl-10 pr-10 font-poppins font-semibold leading-[1.1] h-[150px] w-full flex justify-start items-center">
                                            <TypeAnimation
                                                preRenderFirstString={true}
                                                sequence={[
                                                    'Transformando ideias \nem soluções',
                                                    1500,
                                                    'Transformando ideias \nem conquistas',
                                                    1500,
                                                    'Transformando ideias \nem oportunidades',
                                                    1500,
                                                ]}
                                                wrapper="span"
                                                speed={150}
                                                style={{
                                                    display: 'inline-block',
                                                    whiteSpace: 'pre-line',
                                                }}
                                                repeat={Infinity}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-0">
                                            <div className="text-white text-[18px] max-xl:text-[14px] pl-10 pr-10 font-poppins font-medium  leading-6">
                                                Nosso compromisso é transformar
                                                desafios em conquistas.
                                            </div>
                                            <div className="max-lg:hidden text-white text-[18px] max-xl:text-[14px] pl-10 pr-10 font-poppins font-medium pt-2 leading-6">
                                                Construindo pontes tecnológicas
                                                que conectam o presente ao
                                                futuro.
                                            </div>
                                        </div>

                                        <div className="pl-10 pr-10 pt-5 flex">
                                            <div className="bg-main-500 font-poppins font-bold p-4 cursor-pointer transition-all hover:bg-main-700 flex gap-2 justify-center items-center">
                                                Conheça nossas soluções
                                                <MdKeyboardDoubleArrowRight className="text-[20px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[40%] h-full max-xl:hidden">
                                <div className="w-full h-full flex">
                                    <div
                                        className="h-full w-full z-10 floating"
                                        style={{
                                            backgroundImage: `url(${HomeBanner})`,
                                            backgroundSize: 'cover',
                                            clipPath:
                                                'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-10">
                <div className="container mx-auto">
                    <div className="border border-red-500 flex">
                        <div className="border border-red-500 w-full">
                            <div className="flex justify-center items-center">
                                <div
                                    data-aos="fade-up"
                                    className="border border-yellow-500 m-5 p-5 w-full min-h-[200px]"
                                >
                                    <div className="border-transparent">
                                        <img
                                            src={HomeBanner}
                                            alt=""
                                            className="object-cover h-[280px] w-full rounded-lg"
                                        />
                                    </div>

                                    <div className=" w-full border border-blue-300 mt-[-25px] h-[50px] bg-main-500 z-50">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-red-500 w-full">1</div>
                        <div className="border border-red-500 w-full">1</div>
                    </div>
                </div>
            </div>

            {/* <div data-aos="fade-up">312312312</div> */}
            <Footer />
        </React.Fragment>
    )
}

export default Home
