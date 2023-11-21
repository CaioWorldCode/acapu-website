import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { GiBrain } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { BiSolidNetworkChart } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Aos from 'aos'
import 'aos/dist/aos.css'

import HomeBanner from '../../assets/images/team.jpg'
import Acapu1 from '../../assets/images/home-1.jpg'
import Acapu2 from '../../assets/images/home-2.jpg'
import Acapu3 from '../../assets/images/home-3.jpg'
import HomeBg from '../../assets/images/home-bg.jpg'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Home() {
    const [cookies, setCookies] = useState('consent')

    useEffect(function () {
        Aos.init({ duration: 1000 })
    }, [])

    function checkCookie() {
        const cookie = localStorage.getItem("acapu-cookies");
        
        if (!cookie) {  
            return false;
        }
        
        return cookie;
    }

    const hideCookies = () => {
        localStorage.setItem("acapu-cookies", 'consent');
        setCookies('consent')
    }

    useEffect(() => {
        const cookie = checkCookie();

        setCookies(cookie);
    }, [])


    const services = [
        {
            name: "Consultoria de TI",
            description: "Oferecemos soluções personalizadas para otimizar seus processos, garantindo um ambiente tecnológico seguro e alinhado às melhores práticas do setor.",
            icon: <GiBrain className='text-[75px] text-main-600 m-2'/>,
            route: '/servicos/consultoria-ti'
        },
        {
            name: "Outsourcing",
            description: "Elevamos a produtividade e a flexibilidade do seu negócio por meio de serviços de outsourcing de TI",
            icon: <RiTeamLine className='text-[75px] text-main-600 m-2'/>,
            route: "/servicos/outsourcing"
        },
        {
            name: "Construção de APPS",
            description: "Transforme suas ideias em realidade com nossos serviços especializados em desenvolvimento de aplicativos",
            icon: <IoIosApps className='text-[75px] text-main-600 m-2'/>,
            route: "/servicos/desenvolvimento-apps"
        },
        {
            name: "Gerenciamento de redes",
            description: "Potencialize a eficiência e a segurança da sua rede, enquanto impulsionamos o crescimento da sua empresa no mundo digital.",
            icon: <BiSolidNetworkChart className='text-[75px] text-main-600 m-2'/>,
            route: "/servicos/gerenciamento-redes"
        }
    ]

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
            
            {/* SERVIÇOS */}
            <div className="mt-10 mb-10 max-lg:mt-1 max-lg:mb-1">
                <div className="container mx-auto">
                    <div className="flex max-lg:hidden">
                        {services.map((row, index) => {
                            return(
                                <div className="w-full relative m-3  p-3" data-aos="fade-up" key={index}>
                                    <div className="bg-white p-4 border border-default-100 rounded-md shadow-md">
                                        <div className='flex justify-center items-center'>
                                            {row.icon}
                                        </div>
                                        
                                        <div className='flex justify-center items-center'>
                                            <div className='font-poppins font-bold  text-lg uppercase text-default-700 bg-main-600 pr-5 pl-5 m-2 '
                                                style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)', }}>
                                                {row.name}
                                            </div>
                                        </div>
                                        
                                        <div className=' font-poppins font-light text-sm text-default-700 mb-10 text-center mt-2'>
                                            {row.description}
                                        </div>
        
                                        <div className='absolute bottom-0 left-0  w-full'>
                                            <div className='cursor-pointer hover:bg-main-700 transition-all bg-main-500 rounded-bl-md rounded-br-md m-3 h-[40px] flex justify-center items-center font-poppins text-default-700 font-bold uppercase text-sm'>
                                                Saiba mais
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className='hidden max-lg:block'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                        >
                            {services.map((row, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className='border  rounded-lg border-default-100 m-5 flex'>
                                            <div className='w-[100%]'>
                                                <div className='flex justify-center items-center'>
                                                    {row.icon}
                                                </div>
                                                <div className='font-poppins font-bold  text-lg uppercase text-default-700 bg-main-600 ml-[20px] mr-[20px] m-2 text-center'
                                                    style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)', }}>
                                                    {row.name}
                                                </div>
                                                <div className=' font-poppins font-light text-sm text-default-700 text-center mt-4 mb-4'>
                                                    {row.description}
                                                </div>
                                                <div className='cursor-pointer hover:bg-main-700 transition-all bg-main-500 rounded-md m-3 h-[40px] flex justify-center items-center font-poppins text-default-700 font-bold uppercase text-sm'>
                                                    Saiba mais
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* SERVIÇOS */}

            {/* ACAPU */}
            <div className='bg-default-800  mt-10 mb-10 max-lg:mt-1'>
                <div className='container mx-auto h-full pt-5 pb-5'>
                    <div className='flex h-full'>
                        <div className='w-[50%] max-lg:hidden'>
                            <div className='flex h-full'>
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
                        <div className='w-[50%] max-lg:w-[100%] h-full'>
                            <div className='p-5'>
                                <div className='text-white font-bold font-poppins text-3xl'>ACAPU</div>
                                <p className='text-white font-poppins mt-3'>Há mais de 20 anos, a Acapu Tecnologia vem crescendo no mercado, sempre focada na entrega de soluções de alta qualidade para nossos clientes. </p>
                                <p className='text-white font-poppins mt-6'>Estamos sempre antenados nas novas tecnologias e ferramentas disponíveis no mercado para que possamos  utilizá-las da melhor maneira em nossa empresa para alcançar resultados satisfatórios.</p>
                                <p className='text-white font-poppins mt-6'>A <span className='font-bold text-main-500'>Acapu Tecnologia</span> é uma empresa exclusivamente nacional e foi criada com o objetivo de oferecer soluções integradas de infraestrutura nas áreas de engenharia elétrica e telecomunicações, sempre acompanhando às necessidades do mercado e desenvolvimento soluções de infraestrutura elétrica, lógica e comunicação de dados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ACAPU */}


            {/* SISTEMA SOB MEDIDA */}
            <div className='mt-10 mb-10 max-lg:mt-1 max-lg:mb-1'>
                <div className='container mx-auto'>
                    <div className='text-default-700 font-poppins font-bold uppercase text-center text-[24pt]'>
                        Sistemas sob medida
                    </div>

                    <div className='flex'  data-aos="fade-right">
                        <div className='w-[10%] max-lg:w-[20%] flex justify-center items-center'>
                            <div className='border-[6px] border-main-500 rounded-full w-[80px] h-[80px] max-lg:w-[60px] max-lg:h-[60px] flex justify-center items-center text-3xl max-lg:text-xl font-poppins font-extrabold shadow-lg'>
                                1
                            </div>
                        </div>
                        <div className='w-full max-lg:w-[80%]'>
                            <p className='text-default-700  font-bold font-poppins text-xl max-lg:text-[11pt] max-lg:ml-2 max-lg:mr-2'>Atende 100% da sua necessidade</p>
                            <p className='font-poppins text-default-700 mt-2 max-lg:mr-4 max-lg:ml-2 max-lg:text-sm'>Todas as funcionalidades são projetadas para atender às demandas específicas do seu negócio, sem funcionalidades desnecessárias ou ineficientes.</p>
                        </div>
                    </div>

                    <div className='flex mt-10'  data-aos="fade-right">
                        <div className='w-[10%] max-lg:w-[20%] flex justify-center items-center'>
                            <div className='border-[6px] border-main-500 rounded-full w-[80px] h-[80px] max-lg:w-[60px] max-lg:h-[60px] flex justify-center items-center text-3xl max-lg:text-xl font-poppins font-extrabold shadow-lg'>
                                2
                            </div>
                        </div>
                        <div className='w-full max-lg:w-[80%]'>
                            <p className='text-default-700  font-bold font-poppins text-xl max-lg:text-[11pt] max-lg:ml-2 max-lg:mr-2'>Sua empresa mais competitiva</p>
                            <p className='font-poppins text-default-700 mt-2 max-lg:mr-4 max-lg:ml-2 max-lg:text-sm'>Um sistema personalizado pode tornar a operação e gestão da sua empresa mais eficiente e eficaz, o que pode levar a uma vantagem competitiva no mercado.</p>
                        </div>
                    </div>

                    <div className='flex mt-10'  data-aos="fade-right">
                        <div className='w-[10%] max-lg:w-[20%] flex justify-center items-center'>
                            <div className='border-[6px] border-main-500 rounded-full w-[80px] h-[80px] max-lg:w-[60px] max-lg:h-[60px] flex justify-center items-center text-3xl max-lg:text-xl font-poppins font-extrabold shadow-lg'>
                                3
                            </div>
                        </div>
                        <div className='w-full max-lg:w-[80%]'>
                            <p className='text-default-700  font-bold font-poppins text-xl max-lg:text-[11pt] max-lg:ml-2 max-lg:mr-2'>Foco nos resultados</p>
                            <p className='font-poppins text-default-700 mt-2 max-lg:mr-4 max-lg:ml-2 max-lg:text-sm'>O projeto personalizado é desenvolvido com foco nos objetivos específicos do seu negócio, o que garante resultados mais rápidos e eficazes.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SISTEMA SOB MEDIDA */}

            {/* COOKIES */}
            <div className={`fixed bg-default-700 bottom-0 z-50 w-full h-[150px] max-lg:h-[200px] ${cookies === 'consent' ? 'hidden' : 'block'}`}>
                <div className='container mx-auto h-full max-lg:p-2'>
                    <div className='flex h-full max-lg:flex-col max-lg:gap-2'>
                        <div className='w-[80%] max-lg:w-[100%] flex gap-2 flex-col h-full justify-center items-center'>
                            <div className='text-white font-roboto font-extrabold max-lg:text-[13px] text-[15px] w-full'>
                                Este site utiliza cookies!
                            </div>
                            <div className='text-white font-roboto font-normal max-lg:text-[12px]'>
                                Utilizamos cookies para personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar o nosso tráfego. Também partilhamos informações acerca da sua utilização do site com os nossos parceiros de redes sociais, de publicidade e de análise, que as podem combinar com outras informações que lhes forneceu ou recolhidas por estes a partir da sua utilização dos respetivos serviços.
                            </div>
                        </div>

                        <div className='w-[20%] max-lg:w-[100%] flex justify-center items-center'>
                            <div onClick={() => hideCookies()} className='bg-main-500 p-5 max-lg:p-2 w-[90%] max-lg:w-[80%] font-poppins font-bold cursor-pointer hover:bg-main-700 flex justify-center items-center gap-4'>
                                <div>Ok entendi!</div>
                                <FaCircleCheck className='text-black'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* COOKIES */}

            <Footer />
        </React.Fragment>
    )
}

export default Home
