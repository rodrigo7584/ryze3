import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import parceiro1 from '../public/agr.png'
import parceiro2 from '../public/ducam.png'
import parceiro3 from '../public/grupo-ducam.png'
import parceiro4 from '../public/rvb.png'
import iconNextPrevGreen from '../public/icon-next-prev-green.png'

const Footer = () => {
  return (
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
            <Image
              src={iconNextPrevGreen}
              width={30}
              height={30}
              quality={100}
              className="swiper-button-prev"
              alt=""
            />
            <Image
              src={iconNextPrevGreen}
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
  )
}

export default Footer
