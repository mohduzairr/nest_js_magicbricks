import React from 'react';

export const ResourceBox = ({setResourcehide}) => {
  return (
      <>
         <div onMouseEnter={()=>setResourcehide(true)} onMouseLeave={()=>setResourcehide(false)} className="lg:h-72 shadow-4xl border-t-white border-2 rounded-2xl border-bordergrey lg:w-[28rem] bg-white absolute  ml-[48rem] flex justify-around ">
           <div className="mt-6 ">
               <span className="text-lg border-b-2 p-2 border-y-bordergrey">News</span> 
               <div className="mt-6 font-light"><span> MB TV</span></div>
               <div className="mt-2 font-light"><span>News </span></div>
               <div className="mt-2 font-light"><span>City News</span></div>

           </div>
           <div className="mt-6">
             <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Blog</span>
              <div className="mt-6 font-light"><span> Blog Collection</span></div>
               <div className="mt-2 font-light"><span>Lifestyle</span></div>
               <div className="mt-2 font-light"><span>Policies</span></div>
               <div className="mt-2 font-light"><span>Finance & Legal</span></div>
 
           </div>
           <div className="mt-6">
           <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Home Services </span>
              <div className="mt-6 font-light"><span> Packers & Movers</span></div>
               <div className="mt-2 font-light"><span>Home Cleaning</span></div>
               <div className="mt-2 font-light"><span> Pest Control</span></div>
               <div className="mt-2 font-light"><span>Sanitization</span></div>
               
          </div>
          
          
          
        </div>
      </>
  );
};
