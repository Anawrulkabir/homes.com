import { Link } from 'react-router-dom'
import { LuUserSquare2 } from 'react-icons/lu'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'

const Nav = () => {
  return (
    <div className="absolute w-full ">
      <div className="">
        <div className="drawer drawer-end border-t-[4px] border-orange-500 z-30 bg-transparent">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col lg:px-4 px-2 text-white">
            {/* Navbar */}
            <div className="w-full navbar  flex items-center justify-between ">
              <div className="hidden lg:block text-base">Find an Agent</div>
              <div className=" px-2 mx-2 ">
                <Link to={'/'} className="flex items-end gap-2 justify-center">
                  <img
                    src="/monday-1.svg"
                    alt=""
                    className="w-5 h-5 lg:w-8 lg:h-8"
                  />
                  <span className="text-xl lg:text-3xl relative leading-none ">
                    Homes.com
                    <span className="text-[5px] lg:text-[8px] absolute top-[3px] lg:-top-[3px]">
                      TM
                    </span>
                  </span>
                </Link>
              </div>
              <div className="flex-none lg:hidden ">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-none hidden lg:block text-black">
                <ul className="menu menu-horizontal flex items-center gap-3 ">
                  <div className=" text-base text-white">
                    <Link className="text-white hover:text-orange-500">
                      Register
                    </Link>
                    <span> / </span>
                    <Link className="text-white hover:text-orange-500">
                      Sign In
                    </Link>
                  </div>
                  <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                    <div tabIndex={0} role="button" className="m-1 text-white">
                      <div className="flex gap-1 border-2 rounded-lg p-[5px] border-zinc-100 items-center">
                        <LuUserSquare2 className="h-6 w-6" />
                        <PiDotsThreeOutlineVerticalFill />
                      </div>
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 min-h-full "
                    >
                      {/* <li className="hidden flex items-center justify-center mt-3 ">
                        <Link
                          to={'/'}
                          className="flex items-end gap-2 justify-center"
                        >
                          <img
                            src="/monday-1.svg"
                            alt=""
                            className="w-5 h-5 "
                          />
                          <span className="text-xl relative leading-none">
                            Homes.com
                            <span className="text-[5px] absolute top-[3px]">
                              TM
                            </span>
                          </span>
                        </Link>
                      </li> */}
                      <li className="mb-2">
                        <div className="flex  gap-0 w-full p-0">
                          <div className="border-b-1 bg-red-500 w-full h-1 p-0"></div>
                          <div className="border-b-1 bg-yellow-500 w-full h-1 p-0"></div>
                          <div className="border-b-1 bg-green-500 w-full h-1 p-0"></div>
                        </div>
                      </li>
                      <li>
                        <Link className="hidden text-yellow-600">Sign In</Link>
                      </li>
                      <li className="mb-1">
                        <Link className="hidden text-yellow-600">Register</Link>
                      </li>
                      <div className="hidden border-b border-gray-400 rounded-none w-full mb-1"></div>
                      <li>
                        <Link>Home for Sale</Link>
                      </li>
                      <li>
                        <Link>Home for Rent</Link>
                      </li>
                      <li>
                        <Link>Recently Sold Homes</Link>
                      </li>
                      <li>
                        <Link>Agent Directory</Link>
                      </li>
                      <li>
                        <Link>Neighborhood Search</Link>
                      </li>
                      <li>
                        <Link>School Search</Link>
                      </li>
                      <li>
                        <Link>Building Search</Link>
                      </li>
                      <div className="border-b border-gray-400 rounded-none w-full mb-1 mt-1"></div>
                      <li>
                        <Link>Favourite</Link>
                      </li>
                      <li>
                        <Link>Notes</Link>
                      </li>
                      <li>
                        <Link>Saved Search</Link>
                      </li>
                      <li className="mb-3">
                        <Link>Co-shopper & Agent</Link>
                      </li>
                      <li className="">
                        <div className="flex  gap-0 w-full p-0">
                          <div className="border-b-1 bg-red-500 w-full h-1 p-0"></div>
                          <div className="border-b-1 bg-yellow-500 w-full h-1 p-0"></div>
                          <div className="border-b-1 bg-green-500 w-full h-1 p-0"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {/* Content */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-0 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li className="flex items-center justify-center mt-3 ">
                <Link to={'/'} className="flex items-end gap-2 justify-center">
                  <img src="/monday-1.svg" alt="" className="w-5 h-5 " />
                  <span className="text-xl relative leading-none">
                    Homes.com
                    <span className="text-[5px] absolute top-[3px]">TM</span>
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <div className="flex  gap-0 w-full p-0">
                  <div className="border-b-1 bg-red-500 w-full h-1 p-0"></div>
                  <div className="border-b-1 bg-yellow-500 w-full h-1 p-0"></div>
                  <div className="border-b-1 bg-green-500 w-full h-1 p-0"></div>
                </div>
              </li>
              <li>
                <Link className="text-yellow-600">Sign In</Link>
              </li>
              <li className="mb-1">
                <Link className="text-yellow-600">Register</Link>
              </li>
              <div className="border-b border-gray-400 rounded-none w-full mb-1"></div>
              <li>
                <Link>Home for Sale</Link>
              </li>
              <li>
                <Link>Home for Rent</Link>
              </li>
              <li>
                <Link>Recently Sold Homes</Link>
              </li>
              <li>
                <Link>Agent Directory</Link>
              </li>
              <li>
                <Link>Neighborhood Search</Link>
              </li>
              <li>
                <Link>School Search</Link>
              </li>
              <li>
                <Link>Building Search</Link>
              </li>
              <div className="border-b border-gray-400 rounded-none w-full mb-1 mt-1"></div>
              <li>
                <Link>Favourite</Link>
              </li>
              <li>
                <Link>Notes</Link>
              </li>
              <li>
                <Link>Saved Search</Link>
              </li>
              <li className="mb-3">
                <Link>Co-shopper & Agent</Link>
              </li>
              <li className="">
                <div className="flex  gap-0 w-full p-0">
                  <div className="border-b-1 bg-red-500 w-full h-1 p-0"></div>
                  <div className="border-b-1 bg-yellow-500 w-full h-1 p-0"></div>
                  <div className="border-b-1 bg-green-500 w-full h-1 p-0"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
