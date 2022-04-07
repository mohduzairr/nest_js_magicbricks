import React from "react";
import Link from "next/link";
export const LoginBox = ({ lgnhide, setLgnhide }) => {
  return (
    <>
      <div
        onMouseEnter={() => setLgnhide(true)}
        onMouseLeave={() => setLgnhide(false)}
        className=" h-[26rem] w-60 bg-white shadow-2xl  rounded-b-2xl border-2 border-bordergrey ml-[887px] z-20 absolute  border-t-white"
      >
          <ul className="pl-7 text-sm">
              <li className="font-light">My Activity</li>
              <li className="mt-4 font-semibold">Contacted Properties</li>
              <li className="mt-4 font-semibold">Viewed Properties</li>
              <li className="mt-4 font-semibold">Shortlisted Properties</li>
              <li className="mt-4 font-semibold"> Searches</li>

          </ul>
          <div className="mt-6 border-t-2 border-t-bordergrey border-b-bordergrey border-b-2  pl-7 pt-5 pb-5">
              <div className="font-semibold"><span>Recommendations</span></div>
             
              <div className="mt-4 font-semibold"><span>My Profile</span></div>
          </div>
          <button className="text-center h-10 w-44 rounded-full mt-4 ml-8 text-white bg-red hover:bg-onclick active:bg-onclick focus:outline-none focus:ring focus:ring-ringred ">Login</button>
           
           <div className="ml-6 mt-2">
               <span className="text-sm font-light ">New to Magicbricks?</span>
               <div  className="text-red ml-1"><Link href="/signuppage" >Sign up</Link></div>
               {/* <span className="text-red ml-1" > Signup</span> */}
           </div>
      
      </div>
    </>
  );
};
