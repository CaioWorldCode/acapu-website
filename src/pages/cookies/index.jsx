import React, { useEffect } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Background from './../../assets/images/acapu-1.jpg'

export default function Cookies() {
    useEffect(() => {
        window.scrollTo(0, 0)
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
                                Cookies
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 mb-10 max-lg:mt-1 max-lg:mb-1 ">
                <div className="text-default-800 font-poppins">
                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            1. Introdução
                        </h2>
                        <p className="font-light">
                            Esta Política de Cookies explica como a{' '}
                            <span className="font-bold text-main-700">
                                ACAPU TECNOLOGIA
                            </span>{' '}
                            utiliza cookies e tecnologias semelhantes em seu
                            site. Ao continuar a usar nosso site, você concorda
                            com o uso de cookies conforme descrito nesta
                            política.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            2. O que são Cookies?
                        </h2>
                        <p className="font-light">
                            Cookies são pequenos arquivos de texto armazenados
                            no seu dispositivo quando você visita um site. Eles
                            são amplamente utilizados para tornar os sites mais
                            eficientes, melhorar a experiência do usuário e
                            fornecer informações aos proprietários do site.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            3. Tipos de Cookies Utilizados
                        </h2>
                        <p className="font-light">
                            Utilizamos cookies essenciais, de desempenho e de
                            publicidade. Os cookies essenciais são necessários
                            para o funcionamento adequado do site, enquanto os
                            cookies de desempenho ajudam a entender como os
                            visitantes interagem com o site. Cookies de
                            publicidade são utilizados para fornecer anúncios
                            mais relevantes aos usuários.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            4. Como Controlar Cookies
                        </h2>
                        <p className="font-light">
                            Você pode controlar e/ou excluir cookies conforme
                            desejar. Consulte as configurações do seu navegador
                            para fazer isso. Esteja ciente de que a desativação
                            de cookies pode afetar a funcionalidade do site.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            5. Consentimento
                        </h2>
                        <p className="font-light">
                            Ao continuar a usar nosso site, você consente com o
                            uso de cookies de acordo com esta Política de
                            Cookies. Se você não concorda com o uso de cookies,
                            desative-os conforme as instruções do seu navegador
                            ou pare de usar o site.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            6. Alterações nesta Política
                        </h2>
                        <p className="font-light">
                            Reservamo-nos o direito de modificar esta Política
                            de Cookies a qualquer momento. As alterações serão
                            efetivas imediatamente após a publicação.
                            Recomendamos que você revise periodicamente para
                            estar ciente das atualizações.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">7. Contato</h2>
                        <p className="font-light">
                            Se tiver dúvidas sobre nossa Política de Cookies,
                            entre em contato conosco em [e-mail de contato].
                            Estamos à disposição para esclarecer qualquer dúvida
                            ou preocupação relacionada ao uso de cookies em
                            nosso site.
                        </p>
                    </div>

                    <p className="font-light">
                        Ao continuar a usar nosso site, você concorda com o uso
                        de cookies conforme descrito nesta Política de Cookies.
                    </p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
