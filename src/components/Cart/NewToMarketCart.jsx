import { PiHeartThin } from 'react-icons/pi'
import { RxDotFilled } from 'react-icons/rx'
import PropTypes from 'prop-types'

const NewToMarketCart = ({ imageUrl }) => {
  return (
    <div className="border shadow-lg rounded-md hover:shadow-2xl transform transition duration-200 hover:scale-[99%] hover:shadow-green-100">
      <div className="flex items-center  py-4 px-4 gap-1">
        <p className="text-lg font-extralight">New 1 day ago</p>
      </div>
      <div className="lg:h-[200px] ">
        <img className="" src={imageUrl} alt="" />
      </div>

      <div className="px-3 py-3 text-base ">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between text-base">
            <p className=" font-lg">$199,999</p>
            <div className="flex items-center  font-extralight">
              <RxDotFilled className=" text-gray-300" />
              <span>3 Beds</span>
            </div>
            <div className="flex items-center  font-extralight">
              <RxDotFilled className=" text-gray-300" />
              <span>4.5 Baths</span>
            </div>
          </div>
          <div>
            <PiHeartThin className="text-3xl font-1 hover:text-red-500" />
          </div>
        </div>
        <p className="font-extralight text-left">145 E Harmon Ave Unit 3618</p>
        <p className="font-extralight text-left lg:mb-5">Las Vegas, NV 89109</p>
      </div>
    </div>
  )
}

export default NewToMarketCart

NewToMarketCart.propTypes = {
  imageUrl: PropTypes.string,
}
