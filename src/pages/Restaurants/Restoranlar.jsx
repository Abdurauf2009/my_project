import React from 'react'
import hotel1 from "../../assets/hotel1.png"
import hotel2 from "../../assets/hotel2.png"
import hotel3 from "../../assets/hotel3.png"
import hotel4 from "../../assets/hotel4.png"
import hotel5 from "../../assets/hotel5.png"
import hotel6 from "../../assets/hotel6.png"
import Navbar from '../../components/navbar/Navbar'


const Restoranlar = () => {
  return (
    <>
    <Navbar />
    <div className=' flex flex-col gap-10 p-[85px] '>
       <h1 className='text-[32px]  font-bold'>Popular Destinations</h1>
        <div>
        <div className='flex justify-center gap-9' >
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel1} alt="" />
              <div>
                <p className="text-[16px] font-bold ">Big Sur</p>
                <p className="text-[14px] font-[600] text-[#979797]">California, USA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel2} alt="" />
              <div>
                <p className="text-[16px] font-bold ">Prescott</p>
                <p className="text-[14px] font-[600] text-[#979797]">Arizona, USA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel3} alt="" />
              <div>
                <p className="text-[16px] font-bold ">Fort Mayers</p>
                <p className="text-[14px] font-[600] text-[#979797]">Florida, USA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel4} alt="" />
              <div>
                <p className="text-[16px] font-bold ">Tucson</p>
                <p className="text-[14px] font-[600] text-[#979797]">Arizona, USA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel5} alt="" />
              <div>
                <p className="text-[16px] font-bold ">St. Joseph</p>
                <p className="text-[14px] font-[600] text-[#979797]">Michigan, USA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <img src={hotel6} alt="" />
              <div>
                <p className="text-[16px] font-bold ">Madrid</p>
                <p className="text-[14px] font-[600] text-[#979797]">Spain</p>
              </div>
            </div>
        </div>
        </div>
       </div>
    </>
  )
}

export default Restoranlar