import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'

import Accordion from '../components/Accordion'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

import iconDollar from '../public/icon-dollar.png'
import photoMan2 from '../public/photo-man-2.png'
import iconGreenArrow from '../public/icon-arrow-3.png'
import photoCellphone from '../public/illustration-4.png'
import photoGirlSmilling from '../public/illustration.png'
import illustrationCoin from '../public/illustration-5.png'
import photo from '../public/photo.jpg'
import HowWork from '../components/HowWork'
import iconPrevNext from '../public/icon-next-prev.png'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-home" id="hero">
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
                <Link href="#" className="btn-green">
                  Peça uma demonstração
                </Link>
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
                <Image src={photoMan2} width={472} height={451} quality={100} alt="" />
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
                  O que é<span> RyzePay</span>
                </h2>
                <p>
                  RyzePay é um novo meio de pagamento entre empresas que possibilita que lojistas
                  utilizem o saldo das maquininhas de cartão de crédito para pagamento de
                  fornecedores.
                </p>
                <p>Com RyzePay seu pagamento é garantido e você impulsiona o seu negócio</p>
                <Link href="#" className="btn-green">
                  Peça uma demonstração
                </Link>
              </div>
              <div className="section-image">
                <Image src={photoCellphone} width={555} height={651} quality={100} alt="" />
              </div>
            </div>
          </div>
        </section>
        <HowWork />
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
                    992: {
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
                      <div className="photo">
                        <Image src={photo} width={350} height={520} quality={100} alt="" />
                      </div>
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
                <Image
                  src={iconPrevNext}
                  width={30}
                  height={30}
                  quality={100}
                  className="swiper-button-prev"
                  alt=""
                />
                <Image
                  src={iconPrevNext}
                  width={30}
                  height={30}
                  quality={100}
                  className="swiper-button-next"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <Partners />
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
      <Footer />
    </>
  )
}
