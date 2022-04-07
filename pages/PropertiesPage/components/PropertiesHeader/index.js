import React from 'react';

const PropertiesHeader = () => {
  
  return (
      <>
        <div className='w-full h-12 bg-white shadow-2xl items-center flex justify-around '>
            <div className='p-4 h-10 border-2 border-bordergrey rounded-full  ml-10  flex justify-center items-center '><span className=''>Buy</span><i class="fa fa-caret-down  ml-1"></i><input type="text" name="name" placeholder='Search Item' className='outline-none ml-4 pl-2 w-32 ' /> <i class="fa fa-search ml-2 text-red"></i> </div>
            <div  className=' h-10 w-40 rounded-full pt-1 border-bordergrey border-2 text-center text-lg'> <span>Top Localities</span> <i class="fa fa-caret-down  ml-1"></i>  </div>
            <div  className=' h-10 w-16 rounded-full p-1 border-bordergrey border-2 text-center text-lg'> <span>Flat</span> <i class="fa fa-caret-down  ml-1"></i></div>
            <div  className=' h-10 w-24 rounded-full p-1 border-bordergrey border-2 text-center text-lg'> <span >Budget</span> <i class="fa fa-caret-down  ml-1"></i></div>
            <div  className=' h-10 w-20 rounded-full p-1 border-bordergrey border-2 text-center text-lg'> <span >BHK</span> <i class="fa fa-caret-down  ml-1"></i></div>
            <div  className=' h-10 w-28 rounded-full p-1 border-bordergrey border-2 text-center text-lg'> <span >Posted By</span> <i class="fa fa-caret-down  ml-1"></i></div>
        </div>
      </>
  );
};

export default PropertiesHeader;
