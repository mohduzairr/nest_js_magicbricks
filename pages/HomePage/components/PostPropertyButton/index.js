import React from 'react';

const PostpropertyButton = () => {
  return( 
  <>
    <div className="lg:w-[76rem] w-full lg:h-32 bg-transparentred ml-6 flex justify-around items-center mt-4">
        <div className="pr-4 text-xl"> <span> Post your Property for Free <br/> List it on Propnex and get genuine <br/> leads</span></div>
        <div className="h-20  rounded-2xl text-center text-xl  w-44 bg-lightyellow ml-12 pt-5 hover:bg-yellow active:bg-green focus:outline-none focus:ring focus:ring-yellow ring-offset-2 ring-2 ring-yellow cursor-pointer "> <span className=""> Post Property FREE</span></div>
    </div>
  </>
  );
};

export default PostpropertyButton;
