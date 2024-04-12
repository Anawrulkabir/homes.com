import './Slider.css'

import { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { TbLocation } from 'react-icons/tb'
import { HiOutlineSearch } from 'react-icons/hi'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Slider() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div className="">
            <div
              className="hero h-[250px] lg:min-h-[calc(100vh-150px)] "
              style={{
                // backgroundImage: 'url(https://ibb.co/JtXVMq3)',
                backgroundImage: 'url(/image/banner-1.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div
              className="hero h-[250px] lg:min-h-[calc(100vh-150px)] "
              style={{
                backgroundImage: 'url(/image/banner-2.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div
              className="hero h-[250px] lg:min-h-[calc(100vh-150px)] "
              style={{
                backgroundImage: 'url(/image/banner-3.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div
              className="hero h-[250px] lg:min-h-[calc(100vh-150px)] "
              style={{
                backgroundImage: 'url(/image/banner-4.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div
              className="hero h-[250px] lg:min-h-[calc(100vh-150px)] "
              style={{
                backgroundImage: 'url(/image/banner-5.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>
        <div className=" flex justify-center flex-col items-center  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30">
          <h1
            id="banner-text"
            className="text-2xl lg:text-[52px] lg:tracking-wide lg:leading-[62px] font-noraml text-white   min-w-[calc(100vw-200px)] text-center mb-8 mt-16 lg:mt-10 drop-shadow-md"
          >
            Find a home in a neighborhood you love
          </h1>

          <div className="">
            <div className="flex relative border-[3px] rounded-full border-orange-500 ">
              <span className=" absolute top-1/2 -translate-y-1/2 left-0 px-5 bg-zinc-200 h-full rounded-l-full pt-[15px] lg:pt-[20px]">
                <TbLocation className="text-black lg:text-[20px] text-[16px]" />
              </span>
              <input
                type="text"
                placeholder="Place, Neighborhood, School or Agent"
                // className=" px-10 lg:px-32 py-2 lg:py-4 rounded-r-full min-w-[calc(100vw-550px)] "
                className="rounded-full min-w-[calc(100vw-550px)] lg:text-lg text-sm font-[200] lg:py-4 py-3 lg:pl-20 pl-16 pr-[48px] leading-5 text-black "
              />
              <span className=" absolute text-white border-green-500  top-0 right-0 -translate-x-1/2 translate-y-1/2 pr-1 pt-[2px] lg:pt-[4px]">
                <HiOutlineSearch className="text-orange-500 lg:text-[24px] text-[20px]" />
              </span>
            </div>
          </div>
        </div>

        <div className="autoplay-progress mt-12" slot="container-end">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="text-orange-500"
          >
            <circle cx="24" cy="24" r="12"></circle>
          </svg>
          <span
            ref={progressContent}
            className="text-orange-500 text-sm font-light"
          ></span>
        </div>
      </Swiper>
    </div>
  )
}
