import SuggestedHouseCart from '../Cart/SuggestedHouseCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'

const SuggestedHouses = () => {
  return (
    <div className="mb-12">
      <h3 className="lg:text-xl text-lg font-normal mb-4">
        Homes.com Suggestions
      </h3>
      <div>
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
            <SuggestedHouseCart imageUrl={'../../../image/banner-3.jpg'} />
          </SwiperSlide>
          <SwiperSlide>
            <SuggestedHouseCart imageUrl={'../../../image/banner-4.jpg'} />
          </SwiperSlide>
          <SwiperSlide>
            <SuggestedHouseCart imageUrl={'../../../image/banner-5.jpg'} />
          </SwiperSlide>
          <SwiperSlide>
            <SuggestedHouseCart imageUrl={'../../../image/banner-6.jpg'} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SuggestedHouses
