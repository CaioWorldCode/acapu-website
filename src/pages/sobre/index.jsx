import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import Background from './../../assets/images/pic-7.jpg'
import Acapu1 from '../../assets/images/home-1.jpg'
import Acapu2 from '../../assets/images/home-2.jpg'
import Acapu3 from '../../assets/images/home-3.jpg'
import Aos from "aos";

export default function Sobre() {
    useEffect(function () {
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <React.Fragment>
            <Header />

            <div className="min-h-[200px] max-lg:h-[100px] relative">
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

            <div className=" container mx-auto mt-10 mb-10 h-[600px]">
                <div className='flex h-full'>
                    <div className='w-[50%] max-lg:hidden border border-red-500'>
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
                      
                      
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}