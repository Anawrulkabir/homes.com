// Import Swiper React components
// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { useState } from 'react'
// import required modules

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import OpenHouseCart from '../../Cart/OpenHouseCart'
import { Pagination } from 'swiper/modules'

export default function OpenHouseSlider() {
  return (
    <div className="">
      <Swiper
        // onSwiper={setSwiperRef}
        // slidesPerView={3}
        centeredSlides={false}
        spaceBetween={15}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-1.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-3.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-4.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <OpenHouseCart imageUrl={'../../../../image/banner-2.jpg'} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
