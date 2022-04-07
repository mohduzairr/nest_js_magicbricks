import React from 'react';
import Image from 'next/image'
const PublicProperty = () => {
  return (
      <>
       <div className="mt-10 flex lg:flex-col lg:text-4xl text-6xl ml-10 justify-center  font-light">
           <span> <span className="border-b-4 border-b-skyblue">we've</span> got properties for everyone</span>
       </div>    

        <div className="lg:flex-row flex flex-col items-center jus lg:justify-around lg:mt-8 lg:pt-0 pt-12">
        <div className="relative mr-4 " >
         <Image src="/img/image5.jpg" alt="BigCo Inc. logo" height={250} width={300} className="  object-cover border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold bottom-10  text-white"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        <div className="relative mr-4 mt-4 lg:mt-0">
         <Image src="/img/image6.jpg" alt="BigCo Inc. logo" height={250} width={300} className="  object-cover border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4 font-semibold absolute text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>

        <div className="relative mr-4 mt-4 lg:mt-0">
         <Image src="/img/image7.jpg" alt="BigCo Inc. logo" height={250} width={300} className="  object-cover border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        <div className="relative mr-4 mt-4 lg:mt-0">
         <Image src="/img/image8.jpeg" alt="BigCo Inc. logo" height={250} width={300} className="  object-cover border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        
        </div>
      </>
  );
};

export default PublicProperty;
