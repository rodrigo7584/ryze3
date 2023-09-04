import { useState, useEffect } from 'react'
import Image from 'next/image'

import logo from '../public/logo.png'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')

    btnMobile.addEventListener('click', toggleMenu)

    return () => {
      btnMobile.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <header className="menu">
      <div className="container">
        <div className="row">
          <Link href="/" className="logo">
            <Image src={logo} width={119} height={50} quality={100} alt="" />
          </Link>
          <nav className={isMenuOpen ? 'active' : ''}>
            <button className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul>
              <li>
                <Link href="#">Para fornecedores</Link>
              </li>
              <li>
                <Link href="#">Quem somos</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
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
  )
}

export default Header
