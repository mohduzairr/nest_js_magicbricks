import React from 'react';

export const SellBox = ({setSellhide}) => {
  return (
      <>
          <div onMouseEnter={()=>setSellhide(true)} onMouseLeave={()=>setSellhide(false)} className="lg:h-72 shadow-4xl border-t-white border-2 rounded-2xl border-bordergrey lg:w-[48rem] bg-white absolute ml-72 flex justify-around ">
           <div className="mt-6 ">
               <span className="text-lg border-b-2 p-2 border-y-bordergrey">For Owner</span> 
               <div className="mt-6 font-light"><span> Post Property  </span><span class="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full p-1 mt-2">FREE</span></div>
               <div className="mt-2 font-light border-b-2 border-b-bordergrey pb-6"><span>My Dashboard</span></div>
               <div className="mt-6 font-light "><span>Sell / Rent Ad Packages</span></div>
               <div className="mt-2 font-light"><span>+91 9870 260 930 / </span> <span>Email Us</span></div>

           </div>
           <div className="mt-6">
             <span className="text-lg  border-b-2 p-2 border-y-bordergrey">For Agent & Builder</span>
              <div className="mt-6 font-light"><span> My Dashboard</span></div>
               <div className="mt-2 font-light"><span>Ad Packages</span></div>
               <div className="mt-2 font-light"><span>iAdvantage</span></div>
               <div className="mt-2 font-light"><span>Developer Lounge</span></div>
               <div className="mt-2 font-light"><span>Sales Enquiry</span></div>

           </div>
           <div className="mt-6">
           <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Selling Tools </span>
              <div className="mt-6 font-light"><span> Property Valuation</span></div>
               <div className="mt-2 font-light"><span>Find an Agent</span></div>
               <div className="mt-2 font-light"><span>Rates and Trends</span></div>
          </div>
         
          
          
        </div>
      </>
  );
};
