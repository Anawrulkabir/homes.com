import Feature from '../components/Feature/Feature'
import LuxuryHouses from '../components/Houses/LuxuryHouses'
import MostViewedHouses from '../components/Houses/MostViewesHouses'
import NewToMarketHouses from '../components/Houses/NewToMarketHouses'
import OpenHouses from '../components/Houses/OpenHouse/OpenHouses'
import PriceDropHouses from '../components/Houses/PriceDropHouses'
import SuggestedHouses from '../components/Houses/SuggestedHouses'

// import Nav from '../components/Navbar/Nav'
import Neighbors from '../components/Neighbors.jsx/Neighbors'
import Slider from '../components/Slider/Slider'

const MainLayout = () => {
  return (
    <div className="relative">
      {/* <Nav /> */}
      <Slider />
      <div className="mx-4 lg:mx-32">
        <Feature />
        <Neighbors />
        <OpenHouses />
        <SuggestedHouses />
        <MostViewedHouses />
        <NewToMarketHouses />
        <LuxuryHouses />
        <PriceDropHouses />
      </div>
    </div>
  )
}

export default MainLayout
