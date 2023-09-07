import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Teste() {
  return (
    <>
      <Header />
      <main>
        <section className="video-sobre-antecipacao" id="video-sobre-antecipacao">
          <div className="container">
            <div className="row">
              <h2>
                Assista o vídeo e veja como é <span>fácil e rápido</span> pagar com a Ryze.
              </h2>
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/b7eMlvmL3mk?si=mO66KdFj0-lVHH_g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
