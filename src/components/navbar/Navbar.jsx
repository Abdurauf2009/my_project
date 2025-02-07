import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="flex items-center bg-black justify-between px-[120px] py-[20px] ">
      <h1 className="text-white text-[20px] font-bold"><Link to={"/"}>2rism</Link></h1>
      <ul className="text-[#FFFFFF] text-[14px] flex gap-10">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/hotel"}>hotel</Link></li>
        <li><Link to={"/restoranlar"}>restoranlar</Link></li>
        <li><Link to={"/activities"}>activities</Link></li>
        <li><Link>tours</Link></li>
        <li><Link>contact</Link></li>
      </ul>
      <div>
        <div>
          <p className="text-gray-400 text-[12px]">Holla,</p>
          <h1 className="text-[#FFFFFF] text-[14px]">Abdurauf</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
