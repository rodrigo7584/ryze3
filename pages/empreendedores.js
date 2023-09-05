import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster
} from '@vidstack/react'

import Accordion from '../components/Accordion'

import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'

import iconArrow from '../public/icon-arrow.png'
import iconDollar from '../public/icon-dollar.png'
import photoMan from '../public/photo-man.png'
import iconClock from '../public/icon-clock.png'
import iconCoin from '../public/icon-coins.png'
import iconTax from '../public/icon-tax.png'
import photoSpeech from '../public/illustration-2.png'
import notebook from '../public/illustration-3.png'

import Footer from '../components/Footer'
import Header from '../components/Header'
import HowWork from '../components/HowWork'
import Partners from '../components/Partners'

export default function Empreendedores() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <Link href="#porque" className="floating-button">
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
              </Link>
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
                <Link href="#" className="btn-green">
                  Indique seu fornecedor
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
                <Link href="#" className="btn-green">
                  Indique seu fornecedor
                </Link>
              </div>
            </div>
          </div>
        </section>
        <HowWork />
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
        <Partners />
        <section className="fornecedor" id="fornecedor">
          <div className="container">
            <div className="row">
              <div className="content">
                <h2>
                  Convide seu fornecedor a conhecer <span>a Ryze.</span>
                </h2>
                <Link href="#" className="btn-green">
                  Indique seu fornecedor
                </Link>
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
      <Footer />
    </>
  )
}
