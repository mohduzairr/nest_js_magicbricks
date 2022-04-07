import React, { FC } from 'react'
import { FaChevronDown, FaHome, FaLocationArrow, FaRupeeSign, FaSearch } from 'react-icons/fa';
import Dropdown from './components/Dropdown';
// import { Dropdown } from '..'



const SearchBox = () => {
  return (
      <>
      <div className="flex justify-around">
        <div className="text-4xl font-light mt-44 pl-52 " > <span className="ml-16">Find a home you'll <span className="text-6xl font-semibold font-sans">love</span></span> 
          <div className="flex justify-around text-base pt-8 mr-20 pr-24">
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer">Buy</span></div>
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer">Rent</span></div>
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer">PG</span></div>
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer">Plot</span></div>
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer">Commercial</span></div>
              <div className="pr-8"><span className="hover:border-b-2 hover:border-b-ringred p-2 cursor-pointer"> Post Free Ad</span></div>
          </div>
         
        </div>
        <div className=" mt-44 pr-8"><img src="logo.jpg" alt="BigCo Inc. logo" className="mr-8 h-48 w-64"/></div>
      </div>
           <div className="border  border-bordergrey rounded-full flex  justify-between items-center    lg:py-0 shadow-md ml-4 w-[60rem]">
            <div className="flex  justify-between items-center pr-2 border-r ">
                <FaLocationArrow className="text-red mx-3 text-xs lg:text-lg"/>
                <div className="px-4 lg:text-md text-xs font-light tracking-wider  bg-red-200 rounded-full ">
                   New Delhi
                </div>
                <input type="text" className="border-0 w-24 lg:w-40 focus:outline-none  text-sm lg:text-md ml-4" placeholder="Add More..." />
            </div>
            <div className="lg:flex hidden justify-between items-center px-2 border-r ml-2 cursor-pointer ">
            <div className=" flex justify-center items-center relative">
            <FaHome className="text-red mr-3   "/>
                <Dropdown w="w-44"/>
            </div>
                {/* <div className="px-3 text-gray-600 tracking-wider py-1 rounded-full mr-2">
                    Flat +1
                </div>
                <div>
                <FaChevronDown className="text-gray-500 mr-3 text-xs "/>
                </div> */}
            </div>
            <div className="lg:flex hidden justify-between items-center px-2 cursor-pointer ml-2">
            
                <div className=" flex justify-center items-center relative">
            <FaRupeeSign className="text-red mr-3 text-sm "/>
               <Dropdown  w="w-44"/>
            </div>
                
            </div>
            <div className="cursor-pointer hover:opacity-80 flex justify-between items-center px-4 lg:px-8 rounded-full bg-red-700 ml-2 lg:py-3 py-2 ">
                {/* <div className="text-white">
                    <FaSearch className="text-red  text-xs lg:text-xl" />
                </div> */}
            <div className="h-12 w-36 bg-onclick rounded-full text-xl ring-4 ring-lightred pt-2 text-white font-semibold float-right text-center mr-2 "><span>Search</span></div>

            </div>
        </div>
      </>
  );
};

export default SearchBox;
