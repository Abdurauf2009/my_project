import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hotel1 from "../../assets/hotel1.png"
import hotel2 from "../../assets/hotel2.png"
import hotel3 from "../../assets/hotel3.png"
import hotel4 from "../../assets/hotel4.png"
import hotel5 from "../../assets/hotel5.png"
import hotel6 from "../../assets/hotel6.png"
import res1 from "../../assets/res1.png"
import res2 from "../../assets/res2.png"
import res3 from "../../assets/res3.png"
import res4 from "../../assets/res4.png"
import ac1 from "../../assets/ac1.png"
import ac2 from "../../assets/ac2.png"
import ac3 from "../../assets/ac3.png"
import ac4 from "../../assets/ac4.png"
import col from "../../assets/col.png"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'



const Home = () => {
  



  return (
    <>
     <div className="big h-[100vh]">
    <Navbar />
    <div>
      <div className="flex flex-col items-center justify-center h-[69vh] gap-10">
        <h1 className="text-[48px] text-center text-white font-[500]">Eng qiziqarli joylarni kashf eting</h1>
        <button  className="p-[24px]  text-white bg-[#7B61FF] rounded-[12px]">Discover on 3D Globe</button>
        
    

      </div>
    </div>
   </div>
   <div className='py-[40px] px-[115px] flex flex-col gap-[100px]'>
   <div className=' flex flex-col gap-10 pt-[70px]'>
   <h1 className='text-[32px]  font-bold'>Ommabop manzillar

</h1>
    <div>
    <div className='flex justify-center gap-9' >
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel1} alt="" />
          <div>
            <p className="text-[16px] font-bold ">Big Sur</p>
            <p className="text-[14px] font-[600] text-[#979797]">California, AQSH</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel2} alt="" />
          <div>
            <p className="text-[16px] font-bold ">Prescott</p>
            <p className="text-[14px] font-[600] text-[#979797]">Arizona, AQSH</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel3} alt="" />
          <div>
            <p className="text-[16px] font-bold ">Fort Mayers</p>
            <p className="text-[14px] font-[600] text-[#979797]">Florida, AQSH</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel4} alt="" />
          <div>
            <p className="text-[16px] font-bold ">Tucson</p>
            <p className="text-[14px] font-[600] text-[#979797]">Arizona, AQSH</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel5} alt="" />
          <div>
            <p className="text-[16px] font-bold ">St. Joseph</p>
            <p className="text-[14px] font-[600] text-[#979797]">Michigan, AQSH</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <img src={hotel6} alt="" />
          <div>
            <p className="text-[16px] font-bold ">Madrid</p>
            <p className="text-[14px] font-[600] text-[#979797]">ISPANIYA</p>
          </div>
        </div>
    </div>
    </div>
   </div>

   <div className='flex flex-col gap-10'>
    <h1 className='text-[32px] font-bold'>Hotel va Restoranlar</h1>
    <div className='flex gap-10'>
      <div className='flex flex-col items-start gap-3'>
        <img src={res1} alt="" />
        <div className='flex flex-col gap-3'>
          <h1 className='text-[16px] font-bold'>Monastero Santa Rosa Hote & Spa</h1>
          <p className='text-[14px] text-[#979797]'>Salerno, Italya</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res2} alt="" />
        <div className='flex flex-col gap-6'>
          <h1 className='text-[16px] font-bold'>Grand Hotel Tremezzo</h1>
          <p className='text-[14px] text-[#979797]'>Lake Como, Italya</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res3} alt="" />
        <div className='flex flex-col gap-5'>
          <h1 className='text-[16px]  font-bold'>The Oberoi Udaivilas, Udaipur</h1>
          <p className='text-[14px] text-[#979797]'>Udaipur, Hindiston</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <img src={res4} alt="" />
        <div className='flex flex-col gap-5'>
          <h1 className='text-[16px] font-bold'>AKA Beverly Hills</h1>
          <p className='text-[14px] text-[#979797]'>Los Angeles,  AQSH</p>
        </div>
      </div>
    </div>
   </div>
   <div>
   </div>

   <div className='flex flex-col gap-10 '>
    <h1 className='text-[32px] font-bold'>Faoliyatlar</h1>
    <div className='flex gap-10'>
    <div className='flex flex-col gap-3 items-start'>
      <img src={ac1} alt="" />
      <h1 className='text-[16px] font-semibold '>Qayiq</h1>
    </div>
    <div className='flex flex-col gap-3 items-start'>
      <img src={ac2} alt="" />
      <h1 className='text-[16px] font-semibold '>Tog'ga chiqish</h1>
    </div>
    <div className='flex flex-col gap-3 items-start'>
      <img src={ac3} alt="" />
      <h1 className='text-[16px] font-semibold '>Chang'i</h1>
    </div>
    <div className='flex flex-col gap-3 items-start'>
      <img src={ac4} alt="" />
      <h1 className='text-[16px] font-semibold '>Piyoda</h1>
    </div>
    </div>
   </div>


   <div className='flex items-center gap-7'>
    <div className='flex flex-col gap-10 '>
      <h1 className='text-[32px] font-bold'>Biz haqimizda</h1>
      <div className='flex flex-col gap-10 '>
      <p className='text-[16px] w-[548px] text-[#5B5B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <button className='w-[133px] h-[40px] bg-[#F6F4FF] text-[#7B61FF]'>Read more</button>
      </div>
    </div>
    <div>
      <img src={col} alt="" />
    </div>
   </div>
   </div>

   <Footer />
   

 
    </>
  )
}

export default Home