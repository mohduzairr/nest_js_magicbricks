import React from 'react';

export const PropertyServicesBox = ({setPropertyServiceshide}) => {
  return (
      <>
         <div onMouseEnter={()=>setPropertyServiceshide(true)} onMouseLeave={()=>setPropertyServiceshide(false)} className="lg:h-72 shadow-4xl border-t-white border-2 rounded-2xl border-bordergrey lg:w-[36rem] bg-white absolute  flex justify-around ml-[42rem]   ">
           <div className="mt-6 ">
               <span className="text-lg border-b-2 p-2 border-y-bordergrey">Rent Services</span> 
               <div className="mt-6 font-light"><span> Pay Rent</span></div>
               <div className="mt-2 font-light"><span>Rent Agreement </span></div>
               <div className="mt-2 font-light"><span>Generate Rent Receipt</span></div>
               <div className="mt-2 font-light"><span>Tenant Verification</span></div>

           </div>
           <div className="mt-6">
             <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Buy / Sell Services</span>
              <div className="mt-6 font-light"><span> Property Lawyers</span></div>
               <div className="mt-2 font-light"><span>Home Inspection</span></div>
               <div className="mt-2 font-light"><span>Vastu</span></div>
               <div className="mt-2 font-light"><span>Design & Decor</span></div>
              
           </div>
           <div className="mt-6">
           <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Home Services </span>
              <div className="mt-6 font-light"><span> Packers & Movers</span></div>
               <div className="mt-2 font-light"><span>Home Cleaning</span></div>
               <div className="mt-2 font-light"><span> Pest Control</span></div>
               <div className="mt-2 font-light"><span>Sanitization</span></div>
               
               <div className="mt-2 font-bold text-red"><span>View All Services </span> <span className=" text-4xl">&#8594; </span></div>
          </div>
          
          
          
        </div>
      </>
  );
};
