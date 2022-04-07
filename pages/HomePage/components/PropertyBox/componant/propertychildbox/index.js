import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
function PropertyChildBox() {
    const router=useRouter();
  return (
            <>
            <div onClick={()=>router.push('/PropertiesPage')}  className="lg:h-56 lg:w-80 h-96 w-[32rem] border-2 border-bordergrey rounded-2xl shadow-2xl lg:mr-4 cursor-pointer ">
              <Image src="/img/image1.jpg" alt="BigCo Inc. logo" height={120} width={320} className="rounded-t-2xl object-cover"/>
                <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
                <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
            </div>
            </> 
       )
}

export default PropertyChildBox