import React from 'react';
import Image from 'next/image'
const Footer = () => {
  return (
      <>
        <div className="h-80 w-full bg-black mt-6 ">
            <div className="flex justify-around pt-4"> 
                <div>
                    <div className="text-2xl text-white"><span>About Propnex</span></div>
                    <div className="text-sm text-white"><span>PropNex Cambodia is located in Phnom Penh, the capital of Cambodia .</span></div>
                </div>
                <div>
                    <div className="text-2xl text-white"><span>Address Propnex </span></div>
                    <div className="text-sm text-white"><span>#B5 2nd Floor Building, Urban Village, NR. 2, Chak Angrae Leu, Mean Chey,<br/> Phnom Penh . -- (+855) 23 232 717 -- info@propnexkh.com -- Mon - Sun /<br/> 9:00AM - 8:00PM</span></div>
                </div>
            </div>

            <div className="flex justify-around mt-16 pr-20  "> 
                <div className="mr-4 pl-4">
                    <div className="text-2xl text-white"><span> Propnex | Commercial </span></div>
                    <div className="flex pt-4 ">
                    <div className="h-16  rounded-2xl text-center text-xl  w-44 bg-black text-white font-light  hover:bg-green active:bg-lightgrey focus:outline-none focus:ring focus:ring-green ring-offset-2 ring-1 ring-white cursor-pointer "> <span className="mb-4"> Available on the App Store</span></div>
                    <div className="h-16  rounded-2xl text-center text-xl ml-3 w-44 bg-black text-white font-light  hover:bg-green active:bg-lightgrey focus:outline-none focus:ring focus:ring-green ring-offset-2 ring-1 ring-white cursor-pointer "> <span className=""> Get it on the Google Play</span></div>
                    <Image src="/img/facebook.jpeg" alt="BigCo Inc. logo"  height={60} width={60} className="rounded-full  ml-4 mt-2 object-cover"/> 
                    <span className="text-white text-4xl ml-2 font-light mt-2">|</span>
                    <Image src="/img/google.png" alt="BigCo Inc. logo"  height={50} width={50}  className="rounded-full ml-2 mt-2"/>

                    </div>
                </div>
                <div className="pr-20">
                    <div className="text-2xl text-white pb-4"><span>New Projects in India </span></div>
                    <div className="text-sm text-white pb-20"><div><span>New Projects in Delhi/NCR</span><span>New Projects in Delhi/NCR</span> <br/><span>New Projects in Delhi/NCR</span><span>New Projects in Delhi/NCR</span> <br/> <span>New Projects in Delhi/NCR</span><span>New Projects in Delhi/NCR</span></div></div>
                </div>
            </div>
        </div>

        <div className="flex justify-around pt-4 ">
            <div><span>Sitemap</span></div>
            <div><span>Terms & Condition</span></div>
            <div><span>Privacy Policy</span></div>
            <div><span>Blog</span></div>
            <div><span>Careers</span></div>
            <div><span>Testimonials</span></div>
            <div><span>Feedback</span></div>
            <div><span>Unsubscribe</span></div>
            <div><span>Sales Enquiry</span></div>
            <div><span>Buy Our Services</span></div>

        </div>

        <div className="h-24 w-full bg-lightskyblue mt-8 pt-4 text-sm text-center pr-12 pl-12">
            <div><span>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by</span></div>
        </div>

      </>
  );
};

export default Footer;
