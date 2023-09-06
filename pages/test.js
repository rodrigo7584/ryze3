import React from 'react'

import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react'

import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'

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
                width="560"
                height="315"
                src="https://www.youtube.com/embed/b7eMlvmL3mk?si=mO66KdFj0-lVHH_g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <MediaPlayer
                src="https://www.youtube.com/embed/b7eMlvmL3mk?si=mO66KdFj0-lVHH_g"
                poster="/poster-video-2.png"
                thumbnails="/poster-video-2.png"
                aspectRatio={16 / 9}
              >
                <MediaOutlet />
                <MediaPoster alt="A video showing how it work" />
                <MediaCommunitySkin />
              </MediaPlayer>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
