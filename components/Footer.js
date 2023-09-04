import Image from 'next/image'

import Link from 'next/link'

import whiteLogo from '../public/logo-white.png'
import iconLikendin from '../public/icon-linkedin.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="about">
            <Link href="/" className="logo">
              <Image src={whiteLogo} width={120} height={50} quality={100} alt="" />
            </Link>
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
                <Link href="#" target="_blank">
                  <Image src={iconLikendin} width={31} height={31} quality={100} alt="" />
                </Link>
              </li>

              <li>
                <Link href="#" target="_blank">
                  <Image src={iconFacebook} width={31} height={31} quality={100} alt="" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <Image src={iconInstagram} width={31} height={31} quality={100} alt="" />
                </Link>
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
  )
}

export default Footer
