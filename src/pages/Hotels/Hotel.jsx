import React from 'react'
import res1 from "../../assets/res1.png"
import res2 from "../../assets/res2.png"
import res3 from "../../assets/res3.png"
import res4 from "../../assets/res4.png"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'




const Hotel = () => {
  return (
    <>
    <Navbar />
     <div className='flex flex-col gap-10  p-[34px]'>
    <h1 className='text-[32px] font-bold'>Hotels and Restaurants</h1>
    <div className='flex gap-10'>
      <div className='flex flex-col items-start gap-3'>
        <img src={res1} alt="" />
        <div className='flex flex-col gap-3'>
          <h1 className='text-[16px] font-bold'>Monastero Santa Rosa Hotel & Spa</h1>
          <p className='text-[14px] text-[#979797]'>Salerno, Italy</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res2} alt="" />
        <div className='flex flex-col gap-3'>
          <h1 className='text-[16px] font-bold'>Grand Hotel Tremezzo</h1>
          <p className='text-[14px] text-[#979797]'>Lake Como, Italy</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res3} alt="" />
        <div className='flex flex-col'>
          <h1 className='text-[16px] gap-3 font-bold'>The Oberoi Udaivilas, Udaipur</h1>
          <p className='text-[14px] text-[#979797]'>Udaipur, India</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res4} alt="" />
        <div className='flex flex-col gap-3'>
          <h1 className='text-[16px] font-bold'>AKA Beverly Hills</h1>
          <p className='text-[14px] text-[#979797]'>Los Angeles, United States</p>
        </div>
      </div>
    </div>
   </div>
   <div>
   </div>
   <Footer />
    </>
  )
}

export default Hotel