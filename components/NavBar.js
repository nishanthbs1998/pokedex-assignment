import React from 'react'

const NavBar = () => {
  return (
    <div className=" justify-center hidden lg:flex w-full sticky top-0 bg-white">
              {/*second nav */}
              <div className="hover:cursor-pointer hover:bg-[#919191] hover:text-white border-b-[6px] rounded-es sticky border-[#919191]  pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Home
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#E33508] border-b-[6px] border-[#E33508] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Pokedex
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#EE6B2F] border-b-[6px] border-[#EE6B2F] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Video Games & Apps
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#E6BC2F] border-b-[6px] border-[#E6BC2F] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Trading Card Game
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#4DAD5B] border-b-[6px] border-[#4DAD5B] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Pokemon TV
              </div>
              <div className="hover:cursor-pointer hover:text-white hover:bg-[#30A7D7] border-b-[6px] border-[#30A7D7] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Play! Pokemon Events
              </div>
              <div className="hover:cursor-pointer rounded-ee hover:text-white hover:bg-[#1B53BA] border-b-[6px] border-[#1B53BA] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                News
              </div>
            </div>
  )
}

export default NavBar
