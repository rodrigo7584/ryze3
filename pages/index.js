import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster
} from '@vidstack/react'

import Accordion from '../components/Accordion'

import 'swiper/css'
import 'swiper/css/navigation'
import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'

import logo from '../public/logo.png'
import iconArrow from '../public/icon-arrow.png'
import iconDollar from '../public/icon-dollar.png'
import photoMan from '../public/photo-man.png'
import iconClock from '../public/icon-clock.png'
import iconCoin from '../public/icon-coins.png'
import iconTax from '../public/icon-tax.png'
import photoSpeech from '../public/illustration-2.png'
import parceiro1 from '../public/agr.png'
import parceiro2 from '../public/ducam.png'
import parceiro3 from '../public/grupo-ducam.png'
import parceiro4 from '../public/rvb.png'
import notebook from '../public/illustration-3.png'
import whiteLogo from '../public/logo-white.png'
import iconLikendin from '../public/icon-linkedin.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')
    const nav = document.querySelector('header.menu nav')

    btnMobile.addEventListener('click', toggleMenu)

    return () => {
      btnMobile.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <>
      <header className="menu">
        <div className="container">
          <div className="row">
            <a href="#hero" className="logo">
              <Image src={logo} width={119} height={50} quality={100} alt="" />
            </a>
            <nav className={isMenuOpen ? 'active' : ''}>
              <button
                className={
                  isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'
                }
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
              <ul>
                <li>
                  <a href="#fornecedor">Para fornecedores</a>
                </li>
                <li>
                  <a href="#modernize">Quem somos</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#fornecedores" className="btn-green">
                    Cadastre-se Grátis
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <a href="#porque" className="floating-button">
                <span>
                  Saiba Mais
                  <Image
                    src={iconArrow}
                    width={12}
                    height={15}
                    quality={100}
                    alt=""
                  />
                </span>
              </a>
              <div className="content">
                <h1>
                  Melhore seu fluxo de caixa, compre mais e venda mais. O fôlego
                  que a sua empresa precisa.
                </h1>
                <p>
                  RyzePay é um novo meio de pagamento entre empresas que
                  possibilita usar do saldo a receber das suas maquininhas para
                  o pagamento de fornecedores.
                </p>
                <a href="#" className="btn-green">
                  Indique seu fornecedor
                </a>
              </div>
              <div className="section-image">
                <Image
                  src={iconDollar}
                  width={60}
                  height={60}
                  quality={100}
                  alt=""
                  className="icon-dollar icon-dollar-2"
                />
                <Image
                  src={iconDollar}
                  width={60}
                  height={60}
                  quality={100}
                  alt=""
                  className="icon-dollar icon-dollar-1"
                />
                <Image
                  src={photoMan}
                  width={472}
                  height={451}
                  quality={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="porque" id="porque">
          <div className="container">
            <div className="row">
              <h2>
                Por que usar a <span>RYZE</span>?
              </h2>

              <div className="boxes">
                <div className="box">
                  <Image
                    src={iconClock}
                    width={70}
                    height={70}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <h3>MAIS PRAZO E LIMITE</h3>
                  <p>
                    Ao eliminar o risco de inadimplência, o RyzePay ajuda o
                    lojista a obter mais limite e prazo com seu fornecedor.
                  </p>
                </div>
                <div className="box">
                  <Image
                    src={iconCoin}
                    width={70}
                    height={70}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <h3>SEM CUSTO</h3>
                  <p>
                    O lojista não paga taxas nem mensalidade para usar o
                    RyzePay. Sem letras miúdas nem taxas escondidas.
                  </p>
                </div>
                <div className="box">
                  <Image
                    src={iconTax}
                    width={70}
                    height={70}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <h3>SEM TAXA DE ANTECIPAÇÃO</h3>
                  <p>
                    O lojista não precisa antecipar suas vendas no cartão para
                    pagar seu fornecedor, o dinheiro vai para o fornecedor
                    direto da adquirente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="modernize" id="modernize">
          <div className="container">
            <div className="row">
              <div className="section-image">
                <Image
                  src={photoSpeech}
                  width={543}
                  height={500}
                  quality={100}
                  alt=""
                />
              </div>
              <div className="content">
                <h2>
                  Modernize o seu negócio com a <span> Ryze RYZE</span>
                </h2>
                <p>
                  A Ryze é uma empresa de tecnologia financeira que veio para
                  substituir os meios de pagamentos antigos e ineficientes.
                  Unimos tecnologia de ponta às necessidades de empreendedores e
                  fornecedores, ajudamos o fornecedor a dar mais crédito com
                  segurança para seus clientes e o lojista a ganhar mais prazo e
                  limite para conseguir comprar mais e alavancar suas vendas.
                </p>
                <p>
                  A Ryze ajuda você, lojista, a pagar suas compras de forma
                  simples e rápida, trazendo para o seu negócio um melhor
                  controle do fluxo de caixa e ajudando você a evitar pagar
                  juros e multas. Tudo isso de forma 100% gratuita, sem taxas
                  escondidas.
                </p>
                <a href="#" className="btn-green">
                  Indique seu fornecedor
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="como-funciona" id="como-funciona">
          <div className="container">
            <div className="row">
              <h2>
                Como funciona a <span>RYZE</span>
              </h2>
              <div className="boxes">
                <div className="box">
                  <span> 01 </span>
                  <h3>Cadastro da cobrança</h3>
                  <p>O fornecedor cria a cobrança na nossa plataforma.</p>
                </div>
                <div className="box">
                  <span> 02 </span>
                  <h3>Receba a cobrança na palma de sua mão.</h3>
                  <p>
                    O lojista recebe uma notificação no seu aplicativo,
                    visualiza as informações e aceita as condições da cobrança.
                  </p>
                </div>
                <div className="box">
                  <span> 03 </span>
                  <h3>Pagamento</h3>
                  <p>
                    O saldo da maquininha será utilizado para pagar o fornecedor
                    na data de vencimento da cobrança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-sobre" id="video-sobre">
          <div className="container">
            <div className="row">
              <h2>
                Assista o vídeo e veja como é <span>fácil e rápido</span> pagar
                com a Ryze.
              </h2>
              <MediaPlayer
                src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                poster="/poster-video.png"
                thumbnails="/poster-video.png"
                aspectRatio={16 / 9}
              >
                <MediaOutlet />
                <MediaPoster alt="A video showing how it work" />
                <MediaCommunitySkin />
              </MediaPlayer>
            </div>
          </div>
        </section>
        <section className="parceiros" id="parceiros">
          <div className="container">
            <div className="row">
              <h2>
                Algumas marcas que <span>confiam</span> em nós
              </h2>

              <div className="swiper-parceiros">
                <Swiper
                  navigation={{
                    prevEl: '.swiper-parceiros .swiper-button-prev',
                    nextEl: '.swiper-parceiros .swiper-button-next'
                  }}
                  modules={[Navigation]}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40
                    },
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 40
                    }
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image
                        src={parceiro1}
                        width={165}
                        height={150}
                        quality={100}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image
                        src={parceiro2}
                        width={205}
                        height={55}
                        quality={100}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image
                        src={parceiro3}
                        width={86}
                        height={125}
                        quality={100}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image
                        src={parceiro4}
                        width={120}
                        height={150}
                        quality={100}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <img src="/icon-next-prev.png" className="swiper-button-prev" />
                <img src="/icon-next-prev.png" className="swiper-button-next" />
              </div>
            </div>
          </div>
        </section>
        <section className="fornecedor" id="fornecedor">
          <div className="container">
            <div className="row">
              <div className="content">
                <h2>
                  Convide seu fornecedor a conhecer <span>a Ryze.</span>
                </h2>
                <a href="#" className="btn-green">
                  Indique seu fornecedor
                </a>
              </div>
              <div className="section-image">
                <Image
                  src={notebook}
                  width={721}
                  height={593}
                  quality={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="container">
            <div className="row">
              <h2>Perguntas Frequentes</h2>
              <Accordion
                title="Quem é a empresa responsável pelo RyzePay?"
                content="
              O RyzePay é uma solução da Ryze Capital, uma empresa de
              tecnologia autorizada e homologada para participar do
              sistema nacional de recebíveis. A Ryze Capital segue
              rigorosamente o regulamento do BACEN, a LGPD, além de adotar
              as melhores práticas de segurança e proteção da informação."
              />
              <Accordion
                title="É seguro pagar com RyzePay?"
                content="
                A varejista não corre qualquer risco de ter averbados recebíveis 
                sem seu conhecimento e consentimento. O valor dos recebíveis averbados
                 limita-se ao valor necessário para garantir o pagamento ao fornecedor, 
                 e a averbação é feita apenas após o aceite dos termos da cobrança 
                 pela varejista. Além disso, todos os contratos de garantia são 
                 registrados junto a registradoras integrantes do sistema nacional
                  de registro de recebíveis e ficam disponíveis para consulta pela 
                  varejista."
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="about">
              <a href="#hero" className="logo">
                <Image
                  src={whiteLogo}
                  width={120}
                  height={50}
                  quality={100}
                  alt=""
                />
              </a>
              <p>TERMOS DE USO, OPT-IN E POLÍTICA DE PRIVACIDADE</p>
              <p>Nome da Empresa Ltda</p>
              <p>CNPJ: 00.000.000/0000-00</p>
              <p>Rua Nome da Rua, Número - Bairro, Cidade - UF, 00000-000</p>
              <a href="mailto:emaildaempresa@gmail.com" className="email">
                emaildaempresa@gmail.com
              </a>
            </div>
            <div className="social">
              <ul className="social-list">
                <li>
                  <a href="#">
                    <Image
                      src={iconLikendin}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src={iconFacebook}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={iconInstagram}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
