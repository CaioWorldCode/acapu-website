import React, { useEffect } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Background from './../../assets/images/acapu-2.jpg'

export default function Privacidade() {
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
                                Privacidade
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
                            Bem-vindo à Política de Privacidade da{' '}
                            <span className="text-main-700 font-bold">
                                ACAPU TECNOLOGIA
                            </span>
                            . Esta política descreve como coletamos, usamos,
                            divulgamos e protegemos suas informações pessoais
                            quando você utiliza nossos serviços.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            2. Informações Coletadas
                        </h2>
                        <p className="font-light">
                            Para fornecer nossos serviços, coletamos informações
                            que você nos fornece voluntariamente, incluindo, mas
                            não se limitando a, nome, endereço de e-mail, número
                            de telefone e outras informações necessárias para a
                            prestação adequada de nossos serviços.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            3. Uso das Informações
                        </h2>
                        <p className="font-light">
                            Utilizamos suas informações pessoais para oferecer,
                            manter e aprimorar nossos serviços, personalizar sua
                            experiência, enviar comunicações relevantes e
                            garantir a segurança de nossos sistemas.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            4. Compartilhamento de Informações
                        </h2>
                        <p className="font-light">
                            Garantimos que suas informações pessoais não serão
                            vendidas, alugadas ou compartilhadas com terceiros,
                            exceto quando necessário para a prestação de
                            serviços ou conforme exigido por lei.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            5. Segurança das Informações
                        </h2>
                        <p className="font-light">
                            Implementamos medidas de segurança técnicas e
                            organizacionais para proteger suas informações
                            pessoais contra acesso não autorizado, alteração,
                            divulgação ou destruição não autorizada.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            6. Cookies e Tecnologias Semelhantes
                        </h2>
                        <p className="font-light">
                            Utilizamos cookies e tecnologias semelhantes para
                            melhorar sua experiência de navegação, personalizar
                            conteúdo e anúncios, e analisar padrões de uso do
                            site.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            7. Seus Direitos
                        </h2>
                        <p className="font-light">
                            Respeitamos seus direitos de acessar, corrigir,
                            atualizar ou excluir suas informações pessoais.
                            Entre em contato conosco para exercer esses direitos
                            ou para esclarecer qualquer dúvida relacionada à sua
                            privacidade.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">
                            8. Alterações na Política de Privacidade
                        </h2>
                        <p className="font-light">
                            Reservamo-nos o direito de modificar esta Política
                            de Privacidade a qualquer momento. As alterações
                            serão comunicadas de maneira adequada, e
                            recomendamos que você revise periodicamente para
                            estar ciente das atualizações.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-4">9. Contato</h2>
                        <p className="font-light">
                            Se tiver dúvidas sobre nossa Política de
                            Privacidade, entre em contato conosco em
                            contato@acapu.com.br. Estamos à disposição para
                            esclarecer qualquer dúvida ou preocupação
                            relacionada à sua privacidade.
                        </p>
                    </div>

                    <p className="font-light">
                        Ao utilizar nossos serviços, você concorda com os termos
                        desta Política de Privacidade.
                    </p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
