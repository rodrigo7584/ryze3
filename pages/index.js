import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

import Accordion from '../components/Accordion'

import 'swiper/css'
import 'swiper/css/navigation'
import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'

import logo from '../public/logo.png'
import iconDollar from '../public/icon-dollar.png'
import photoMan from '../public/photo-man.png'
import iconGreenArrow from '../public/icon-arrow-3.png'
import photoCellphone from '../public/illustration-4.png'
import photoGirlSmilling from '../public/illustration.png'
import illustrationCoin from '../public/illustration-5.png'
import parceiro1 from '../public/agr.png'
import parceiro2 from '../public/ducam.png'
import parceiro3 from '../public/grupo-ducam.png'
import parceiro4 from '../public/rvb.png'
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
              <button className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}>
                <div></div>
                <div></div>
                <div></div>
              </button>
              <ul>
                <li>
                  <a href="#">Para fornecedores</a>
                </li>
                <li>
                  <a href="#">Quem somos</a>
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
              <div className="content">
                <h1>
                  <span>Acabe com a inadimplência e aumente suas vendas, </span> saiba exatamente
                  quando e quanto vai receber.
                </h1>
                <p>
                  O RyzePay é uma solução de pagamento entre empresas que elimina o risco de
                  inadimplência. Retome o controle das contas a receber da sua empresa.
                </p>
                <a href="#" className="btn-green">
                  Peça uma demonstração
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
                <Image src={photoMan} width={472} height={451} quality={100} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="diferenciais">
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="box">
                  <Image src={iconGreenArrow} width={32} height={38} quality={100} alt="" />
                  <div className="box-content">
                    <h2>Mais segurança financeira</h2>
                    <p>
                      Pagamento garantido, sem risco. Receba sempre na data acordada com seu
                      cliente.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <Image src={iconGreenArrow} width={32} height={38} quality={100} alt="" />
                  <div className="box-content">
                    <h2>Aumente suas vendas </h2>
                    <p>
                      Traga novos clientes para o seu negócio sem medo da inadimplência, recebeu via
                      RyzePay o pagamento é garantido.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <Image src={iconGreenArrow} width={32} height={38} quality={100} alt="" />
                  <div className="box-content">
                    <h2>Melhores condições</h2>
                    <p>
                      Ofereça mais limite de crédito e um maior prazo de pagamento para seus
                      clientes, com a segurança que a ryze oferece.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <Image src={iconGreenArrow} width={32} height={38} quality={100} alt="" />
                  <div className="box-content">
                    <h2>Pagamento digital </h2>
                    <p>
                      Envie cobranças de forma simples e rápida através da nossa plataforma 100%
                      digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="o-que-e" id="o-que-e">
          <div className="container">
            <div className="row">
              <div className="content">
                <h2>
                  O que é<span>RyzePay</span>
                </h2>
                <p>
                  RyzePay é um novo meio de pagamento entre empresas que possibilita que lojistas
                  utilizem o saldo das maquininhas de cartão de crédito para pagamento de
                  fornecedores.
                </p>
                <p>Com RyzePay seu pagamento é garantido e você impulsiona o seu negócio</p>
                <a href="#" className="btn-green">
                  Peça uma demonstração
                </a>
              </div>
              <div className="section-image">
                <Image src={photoCellphone} width={555} height={651} quality={100} alt="" />
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
                    O lojista recebe uma notificação no seu aplicativo, visualiza as informações e
                    aceita as condições da cobrança.
                  </p>
                </div>
                <div className="box">
                  <span> 03 </span>
                  <h3>Pagamento</h3>
                  <p>
                    O saldo da maquininha será utilizado para pagar o fornecedor na data de
                    vencimento da cobrança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lista-diferenciais">
          <div className="container-fluid">
            <div className="row">
              <div className="section-image">
                <Image src={photoGirlSmilling} width={881} height={514} quality={100} alt="" />
              </div>
              <div className="content">
                <ul>
                  <li>Pague apenas pelo o que usar.</li>
                  <li>Envie cobranças de forma rápida e 100% digital.</li>
                  <li>Opções de parcelamento personalizadas.</li>
                  <li>Cobre dívidas em aberto e tenha certeza do recebimento.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="destaque">
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="box">
                  <div className="number">
                    <p>40</p>
                    <p>Milhões</p>
                  </div>
                  <p>
                    em pagamentos garantidos pelo
                    <span> RyzePay.</span>
                  </p>
                </div>
                <p>*Casos reais de números atingidos por nossos clientes.</p>
              </div>
              <div className="section-image">
                <Image src={illustrationCoin} width={430} height={279} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="depoimentos" id="depoimentos">
          <div className="container">
            <div className="row">
              <h2>O que dizem nossos clientes</h2>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className="swiper-depoimentos">
                <Swiper
                  navigation={{
                    prevEl: '.swiper-depoimentos .swiper-button-prev',
                    nextEl: '.swiper-depoimentos .swiper-button-next'
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
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 40
                    }
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="depoimento">
                      <div className="photo"></div>
                      <p className="comentario">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                      </p>
                      <p className="function">
                        <strong>CEO</strong>
                      </p>
                      <p className="name">Name person</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="depoimento">
                      <div className="photo"></div>
                      <p className="comentario">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                      </p>
                      <p className="function">
                        <strong>CEO</strong>
                      </p>
                      <p className="name">Name person</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="depoimento">
                      <div className="photo"></div>
                      <p className="comentario">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                      </p>
                      <p className="function">
                        <strong>CEO</strong>
                      </p>
                      <p className="name">Name person</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="depoimento">
                      <div className="photo"></div>
                      <p className="comentario">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                      </p>
                      <p className="function">
                        <strong>CEO</strong>
                      </p>
                      <p className="name">Name person</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <img src="/icon-next-prev.png" className="swiper-button-prev" />
                <img src="/icon-next-prev.png" className="swiper-button-next" />
              </div>
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
                      <Image src={parceiro1} width={165} height={150} quality={100} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image src={parceiro2} width={205} height={55} quality={100} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image src={parceiro3} width={86} height={125} quality={100} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icone-parceiro">
                      <Image src={parceiro4} width={120} height={150} quality={100} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <img src="/icon-next-prev.png" className="swiper-button-prev" />
                <img src="/icon-next-prev.png" className="swiper-button-next" />
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="container">
            <div className="row">
              <h2>Perguntas Frequentes</h2>
              <Accordion
                title=" O que é RyzePay?"
                content="
                RyzePay é um novo método de pagamento entre empresas que possibilita 
                que lojistas utilizem seus recebíveis de cartão de crédito para pagamento 
                e fornecedores."
              />
              <Accordion
                title="Como funciona o RyzePay?"
                content="
                Por meio da plataforma Ryze o fornecedor envia a cobrança ao cliente que, 
                ao aceitar as condições, cede (ao fornecedor) seus recebíveis de cartão de 
                crédito para realizar o pagamento."
              />
              <Accordion
                title="É seguro receber com RyzePay?"
                content="
                O fornecedor recebe o pagamento na data acordada com o cliente, diretamente 
                da adquirente. A Ryze acompanha a liquidação e trata automaticamente eventuais 
                divergências de valores, recuperando a diferença por meio de cobrança via QR 
                Code ou da captura de novos recebíveis."
              />
              <Accordion
                title="Como antecipar?"
                content="
                O fornecedor consegue antecipar com a Ryze parte ou mesmo todos os recebíveis de 
                cartão de crédito recebidos como pagamento - e com taxas menores que as praticadas 
                no mercado de antecipação de NF."
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
                <Image src={whiteLogo} width={120} height={50} quality={100} alt="" />
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
                    <Image src={iconLikendin} width={31} height={31} quality={100} alt="" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image src={iconFacebook} width={31} height={31} quality={100} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={iconInstagram} width={31} height={31} quality={100} alt="" />
                  </a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet,
                consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
