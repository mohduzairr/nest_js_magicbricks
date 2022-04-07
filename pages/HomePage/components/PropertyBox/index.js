import React from 'react';
// import { div } from 'react-router-dom';

import PropertyChildBox from './componant/propertychildbox';
const PropertyBox = () => {
  return (
        <>
        <div className="mt-10 flex lg:flex-col lg:text-4xl text-8xl ml-10 justify-center  font-light "><span><span className="border-b-4 border-b-yellow">Pro</span>perty Services</span></div>
        <div className=" lg:flex-row flex flex-col items-center  lg:justify-around lg:mt-8 lg:pt-0 pt-12 ">
           <PropertyChildBox/>
           <PropertyChildBox/>
           <PropertyChildBox/>
           <PropertyChildBox/>    
           
        </div>
        
        </>
  );
};

export default PropertyBox;
