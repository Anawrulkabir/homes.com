// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import OpenHouseCart from '../../Cart/OpenHouseCart'
// import { useState } from 'react'

export default function OpenHouseSliderMobileView() {
  return (
    <div className="lg:hidden block">
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={15}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
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
