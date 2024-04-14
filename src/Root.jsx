import Footer from './components/Footer/Footer'
import Nav from './components/Navbar/Nav'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
