import React from 'react'
import ac1 from "../../assets/ac1.png"
import ac2 from "../../assets/ac2.png"
import ac3 from "../../assets/ac3.png"
import ac4 from "../../assets/ac4.png"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'

const Activities = () => {
  return (
    <>
    <Navbar />
     <div className='flex flex-col gap-10 p-[34px] '>
        <h1 className='text-[32px] font-bold'>Activities</h1>
        <div className='flex gap-10'>
        <div className='flex flex-col gap-3 items-start'>
          <img src={ac1} alt="" />
          <h1 className='text-[16px] font-semibold '>Sailing</h1>
        </div>
        <div className='flex flex-col gap-3 items-start'>
          <img src={ac2} alt="" />
          <h1 className='text-[16px] font-semibold '>Climbing</h1>
        </div>
        <div className='flex flex-col gap-3 items-start'>
          <img src={ac3} alt="" />
          <h1 className='text-[16px] font-semibold '>Skiing</h1>
        </div>
        <div className='flex flex-col gap-3 items-start'>
          <img src={ac4} alt="" />
          <h1 className='text-[16px] font-semibold '>Hiking</h1>
        </div>
        </div>
       </div>
       <Footer  />
    </>
  )
}

export default Activities