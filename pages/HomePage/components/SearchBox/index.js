import React from 'react';
// import { Menu } from '@headlessui/react'
const SearchBox = () => {
  return (
      <>
      <div className="flex justify-around ">
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
      <Menu>
      <div as="div" className="h-16 w-[52rem]  rounded-full  ml-16 border-2 border-bordergrey flex justify-between items-center">  
         <div className="ml-12  flex">
           <i class='fas fa-map-marker-alt pt-2 mr-14 pr-2'></i><input type="text" name="name" placeholder="Enter City" className="w-24 text-xl border-none outline-0" /></div>

         <div className="pl-12 border-l-2 border-bordergrey"> 
         <i class="fa fa-home text-red"></i> <span>select property</span> <i class='fas fa-chevron-down ml-4 '></i>
         </div>
         
          <Menu.Button className="pl-16 border-l-2 border-bordergrey">
            <i class="fa fa-rupee text-white bg-red   h-4 w-4  text-xs  mt-4  mr-2 text-center rounded-full"></i>
            <span>Budget</span> <i class='fas fa-chevron-down ml-4 '></i>     
          </Menu.Button>
         <div className="h-12 w-36 bg-onclick rounded-full text-xl pt-2 text-white font-semibold float-right text-center mr-2 "><span>Search</span> </div>
      </div> 


<Menu.Items className="h-96 w-52 border-2  ml-[550px] flex border-bordergrey rounded-b-2xl  justify-evenly pt-4 ">
<div className="h-8 w-24 border-2 rounded-full text-center">
  <span>min price</span>
  <div className= "hover:bg-skyblue p-2 rounded-full cursor-pointer mt-4"><span>Min</span></div>

  <div className="hover:bg-skyblue p-2 rounded-full cursor-pointermt-4"><span>₹5 Lac</span></div>


  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹10 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹20 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹30 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹40 Lac</span></div>


</div>
<div className="h-8 w-24 border-2  rounded-full text-center">
  <span>max price</span>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>Max</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹5 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹10 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹20 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹30 Lac</span></div>
  <div className="mt-4  hover:bg-skyblue p-2 rounded-full cursor-pointer"><span>₹40 Lac</span></div>


</div>

</Menu.Items>

      
     
      </Menu>
      </>
  );
};

export default SearchBox;
