import { FaCirclePlay } from 'react-icons/fa6'
const Neighbors = () => {
  return (
    <div className="mb-12">
      <h3 className="lg:text-xl text-lg font-normal mb-4">
        Neighborhoods in the Los Angeles Area
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 text-white text-lg font-medium gap-3">
        <div className="relative hover:text-green-500 border-[3px] border-white rounded-xl hover:border-green-600 ">
          <img
            className="rounded-lg h-full w-full object-cover  bg-opacity-60"
            src="../../../image/banner-1.jpg"
            alt=""
          />
          <div className="absolute bottom-0 left-0 lg:ml-6 ml-4 mb-3 ">
            <div className="flex gap-3 items-center justify-center ">
              <FaCirclePlay className="text-3xl hidden lg:block " />
              <span>
                West Las Vegas
                <p className="text-sm font-normal">
                  Historic and revitalized part of the Las Vegas community
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-3">
          <div className="relative border-[3px] border-white rounded-xl hover:border-green-600 ">
            <img
              className="rounded-lg object-cover lg:w-[250px] lg:h-[200px] h-full w-full  bg-opacity-60 "
              src="../../../image/banner-2.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 ml-4 mb-3">
              Arts District
              <p className="text-sm font-normal lg:hidden block">
                Historic and revitalized part of the Las Vegas community
              </p>
            </div>
          </div>
          <div className="relative border-[3px] border-white rounded-xl hover:border-green-600 ">
            <img
              className="rounded-lg object-cover lg:w-[250px] lg:h-[200px] h-full w-full bg-opacity-60 "
              src="../../../image/banner-3.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 ml-4 mb-3">
              Rancho Oakey
              <p className="text-sm font-normal lg:hidden block">
                Historic and revitalized part of the Las Vegas community
              </p>
            </div>
          </div>
          <div className="relative border-[3px] border-white rounded-xl hover:border-green-600 ">
            <img
              className="rounded-lg object-cover lg:w-[250px] lg:h-[200px] h-full w-full bg-opacity-60 "
              src="../../../image/banner-4.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 ml-4 mb-3">
              Winchester
              <p className="text-sm font-normal lg:hidden block">
                Historic and revitalized part of the Las Vegas community
              </p>
            </div>
          </div>
          <div className="relative border-[3px] border-white rounded-xl hover:border-green-600 ">
            <img
              className="rounded-lg object-cover lg:w-[250px] lg:h-[200px] h-full w-full bg-opacity-60 "
              src="../../../image/banner-5.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 ml-4 mb-3">
              Huntridge
              <p className="text-sm font-normal lg:hidden block">
                Historic and revitalized part of the Las Vegas community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Neighbors
