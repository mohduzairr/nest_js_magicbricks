import React from 'react';

const ChennaiProperty = () => {
  return (
      <>
     <div className="mt-40 flex lg:flex-col text-4xl ml-10 justify-center  font-light ">
         <span><span className="border-b-4 border-b-yellow">Bec</span>ause you searched New Delhi</span>
     </div>
     <div className="lg:flex-row flex flex-col items-center  lg:justify-around ">
         <div className="lg:h-40 lg:w-72 w-[32rem] h-72  lg:bg-transparentred bg-yellow border-2 mt-8 border-vertlightyellow hover:border-bordergrey p-4 ml-8 lg:ml-0">
             <div><span className="lg:text-2xl text-4xl">13 k</span><span className="lg:text-lg text-2xl"> Properties listed for you</span></div>
             <div className="lg:mt-14 mt-24 text-2xl lg:text-base text-red"><span> Continue last search</span> <i class='fas fa-arrow-right text-xl  ml-2 '></i></div>  
         </div>
         <div className="lg:h-40 lg:w-72  w-[32rem] h-72  lg:bg-transparentred bg-yellow  border-2 mt-8 p-4 border-vertlightyellow hover:border-bordergrey ml-8 lg:ml-0">
            <div><span className=""> Get personalised <br/>property recommendations from us</span></div>
            <div className="mt-4 text-red"><span> See all</span> <i class='fas fa-arrow-right text-xl  ml-2 '></i></div>    
         </div>
         <div className="lg:h-40 lg:w-72  w-[32rem] h-72  lg:bg-transparentred bg-yellow  border-2 mt-8 ml p-4 border-vertlightyellow hover:border-bordergrey ml-8 lg:ml-0">
         <div><span className=""> Top Handpicked Projects  <br/>for you</span></div>
            <div className="mt-10 text-red"><span> See all</span> <i class='fas fa-arrow-right text-xl  ml-2 '></i></div>   
         </div>
         <div className="lg:h-40 lg:w-72  w-[32rem] h-72  lg:bg-transparentred bg-yellow  border-2 mt-8 ml p-4 border-vertlightyellow hover:border-bordergrey ml-8 lg:ml-0">
            <div><span className=""> Top Exclusive Owner Properties </span></div>
            <div className="mt-16 text-red"><span> See all</span> <i class='fas fa-arrow-right text-xl  ml-2 '></i></div>     
         </div>
     </div>

      </>
  );
};

export default ChennaiProperty;
