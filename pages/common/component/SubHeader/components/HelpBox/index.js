import React from 'react';

export const HelpBox = ({setHelphide}) => {
  return (
      <>
        <div onMouseEnter={()=>setHelphide(true)} onMouseLeave={()=>setHelphide(false)} className="lg:h-44 shadow-4xl border-t-white border-2 rounded-2xl border-bordergrey lg:w- w-52 bg-white   flex justify-around absolute  ml-[68rem]">
           <div className="mt-4 mr-14 ">
               <div className="mt-6 font-light"><span> Help Center</span></div>
               <div className="mt-2 font-light"><span>Sales Enquiry </span></div>

           </div>
         
          
          
          
        </div>

      </>
  );
};
