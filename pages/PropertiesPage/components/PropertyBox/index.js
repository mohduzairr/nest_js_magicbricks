import React from 'react'
import { useRouter } from 'next/router'
const PropertyBox = () => {
    const router = useRouter()
    const propertydetails = ()=>{
          router.push('/propertydetailspage');
    }
  return (
    <>
    <div className='flex ml-36   mt-2 '>
        <div onClick={propertydetails} className='h-64 w-[52rem] border-2 border-bordergrey shadow-xl cursor-pointer'>
            <div className='flex '>
                <div className='p-2'><img src="img/image1.jpg" alt="BigCo Inc. logo" class=" h-36 w-40  rounded-xl shadow-2xl object-cover"></img></div>
                <div className='font-semibold '><span className='text-lg text-red'>₹1200000</span>
                <div className='font-semibold'><span className='text-sm'>₹4000/sqr-fit</span></div>
                </div>
                <div className='ml-8'>
                    <div><span ><span className='text-' >Mall</span> for Sale in Kampot ,  Srok Khsach Dankal, Kandal</span></div>
                    <div className='mt-2'><span>Commercial Complex: </span><span>main road in city</span></div>
                    <div className='flex mt-2  '>
                    <div  >Super Area: <b>7000sqft</b> </div>
                    <div className='ml-10'><span>Ready to move</span></div>
                    <div className='ml-10'><span>semi-furnished</span></div>
                    </div>
                    <div className='border-b-2 border-bordergrey p-2 mt-4'> 24 Hours Water Availability...</div>
                    <div className='flex justify-between'>
                    <div className='flex mt-8'>
                         <div  className='p-3 items-center text-center bg-red  rounded-xl   '>
                            {/* <div className='absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-ringred cursor-pointer'> </div> */}
                            <span className=' text-white '>Enquiry Now</span>
                         </div>

                       <div  className=' p-3 items-center text-center bg-red  rounded-xl    ml-2 '>
                            {/* <div className= ' absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-lightred'></div> */}
                            <span className=' text-white  '>Enquiry Now </span>
                       </div>
                       

                    </div>
                    <div className='mt-8 '>Builder KW Group</div>
                    </div>

                </div>

            </div>
        </div>
        <div className='h-64 w-40 border-2 ml-2 border-bordergrey shadow-xl'>
            <div className='flex justify-between'>
                <div className='p-1'><img src="img/image1.jpg" alt="BigCo Inc. logo" class=" h-20 w-20  rounded-xl shadow-2xl object-cover"/></div>
                <div className='text-lg p-2'> 4 Bhk Flat </div>
            </div>
            <div className='font-light'><span> Srok Khsach Dankal, Kandal</span></div>
            <div className='font-light'><span>7000sqft</span></div>
            <div className='font-light'><span>Ready to Move</span></div>
            <div><span>1200000</span></div>
            <div><span>Owner</span></div>
            <div><span>Rubeena</span></div>

        </div>
        </div>
    </>
  )
}

export default PropertyBox