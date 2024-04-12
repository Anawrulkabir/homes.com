import OpenHouseSlider from './OpenHouseSlider'
// import OpenHouseSliderMobileView from './OpenHouseSliderMobileView'

const OpenHouses = () => {
  return (
    <div className="mb-12">
      <h3 className="lg:text-xl text-lg font-normal mb-4">Open Houses</h3>

      <OpenHouseSlider />

      {/* <div className="grid grid-cols-3 gap-5">
        <OpenHouseCart />
        <OpenHouseCart />
        <OpenHouseCart />
      </div> */}
      {/* <OpenHouseSliderMobileView /> */}
    </div>
  )
}

export default OpenHouses
