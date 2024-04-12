const Feature = () => {
  return (
    <div className="mb-12">
      <p className="text-xl lg:text-3xl font-normal mt-5 mb-2">
        Explore Great Neighborhoods
      </p>
      <p className="text-base lg:text-lg font-light mb-3 leading-1 tracking-wider">
        Explore video tours, in-depth research, and articles on 20,000
        neighborhoods.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="shadow-md rounded-md">
          <div
            className="hero rounded-md "
            style={{
              backgroundImage: 'url(/image/banner-3.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-md bg-gradient-to-r from-white via-slate-50 to-bg-transparent"></div>
            <div className="hero-content text-black rounded-md ">
              <div className="flex-1">
                <h1 className="mb-1 text-xl lg:text-2xl font-normal">
                  Explore Great Neighborhoods
                </h1>
                <p className="mb-5 text-base pr-20 lg:pr-32">
                  Explore video tours, in-depth research, and articles on 20,000
                  neighborhoods.
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-md hidden lg:block">
          <div
            className="hero rounded-md "
            style={{
              backgroundImage: 'url(/image/banner-1.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-md bg-gradient-to-l from-white via-slate-50 to-bg-transparent"></div>
            <div className="hero-content text-black rounded-md">
              <div className="flex-1 text-right">
                <h1 className="mb-1 text-xl lg:text-2xl font-normal">
                  Find Highly Rated Schools
                </h1>
                <p className="mb-5 text-base pl-20 lg:pl-32">
                  Find the very best schools with in-depth reviews and ratings
                  from multiple experts.
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className=" shadow-md rounded-md">
          <div
            className="hero rounded-md "
            style={{
              backgroundImage: 'url(/image/banner-5.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-md bg-gradient-to-r from-white via-slate-50 to-bg-transparent"></div>
            <div className="hero-content text-black rounded-md ">
              <div className="flex-1">
                <h1 className="mb-1 text-xl lg:text-2xl font-normal">
                  Discover Residential Buildings
                </h1>
                <p className="mb-5 text-base pr-20 lg:pr-32">
                  Discover residential buildings with our comprehensive building
                  search.
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block shadow-xl rounded-md">
          <div
            className="hero rounded-md "
            style={{
              backgroundImage: 'url(/image/banner-8.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-md bg-gradient-to-l from-white via-slate-50 to-bg-transparent"></div>
            <div className="hero-content text-black rounded-md">
              <div className="flex-1 text-right">
                <h1 className="mb-1 text-xl lg:text-2xl font-normal">
                  Find the Best Agent for You
                </h1>
                <p className="mb-5 text-base pl-20 lg:pl-32">
                  Search a million agent profiles with bios, photographs,
                  reviews, and deal history.
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
