import React from 'react'
import { Header } from '../common/component/Header'
import { SubHeader } from '../common/component/SubHeader'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../common/component/Footer';
const propertydetailspage = () => {
    
  return (
      <>
      <Header/>
      <SubHeader/>
      <div className="">
      <div className='flex justify-around p-5 border-2 w-[72rem]  border-bordergrey mt-10 ml-28'>
          <div className='flex'>
          <div className=''>
              <p className='text-2xl font-semibold'>₹1200000</p>
              <p>See Other Charges</p>
          </div>
          <div className='border-r-2 border-r-bordergrey ml-7 '></div>
          <div className='ml-10'>
              <p className='text-2xl font-semibold'>2 BHK 4000Sq-ft Flat</p>
              <p className='font-thin'>For sale</p>
              <p className='font-thin border-b-2'>Srok Khsach Dankal, Kandal, Kampot</p>
          </div>
          </div>
          <div>
              <div className='bg-skyblue w-96 p-5'>
                  <p>Agent Name:Manish garg</p>
                  <p>Certified Agent</p>
                  <div className='flex justify-between'>
                  <p>Locality Superstar</p>
                  <p className='ml-10 text-lg text-red border-b-2'>contact now</p>
                  </div>
              </div>
          </div>

      </div>
      <div className='bg-lightskyblue text-sm border-t-2 border-t-lightgrey  flex p-2 w-[72rem] ml-28 pl-10' >
          <p className='text-red border-b-2'>PROPERTY DETAILS</p>
          <p className='ml-5 '>LOCALITY DETAILS</p>
          <p className='ml-5 '>PRICE TRENDS</p>
          <p className='ml-5 '>AGENT DETAILS</p>
      </div>
      <div className=' w-[72rem] border-x-2 border-b-2 border-x-bordergrey border-bordergrey shadow-2xl ml-28 p-2 flex'>
          <div className='h-[100px] w-[400px]'><img src="img/image1.jpg" alt="BigCo Inc. logo" class=" h-[350px] w-[350px]   shadow-2xl object-cover"/> </div>
          <div className=' px-10 w-full'>
              <div className='flex font-thin'>
                  <p>4bedroom</p>
                  <p className='ml-20 pl-10'>2bathroom</p>
                  <p className='ml-20 pl-10'>02balcony</p>
              </div>
              <p className='font-thin p-2 border-b-2 border-dotted border-b-bordergrey'>2 See Dimensions</p>
              <div className='flex mt-2 font-thin'>
                  <p>Super area</p>
                  <p className='ml-14'>Carpet area</p>
                  <p className='ml-14'>Loading</p>

              </div>
              <div className='flex mt-2 font-thin'>
                  <select>
                      <option>sqft</option>
                  </select>
                  <select className='ml-24'>
                      <option>sqft</option>
                  </select>
                  <p className='ml-24'>9%</p>
              </div>
              <div className='flex font-thin py-3 border-b-2 border-dotted border-b-bordergrey'>
                  <p>₹ 7000sqftsqft</p>
                  <p className='ml-8'>4000sqft</p>
              </div>
              <div className='flex font-thin mt-2'>
                  <p>Developer</p>
                  <p className='ml-16 '>Project</p>
              </div>
              <div className='flex font-thin py-3 border-b-2 border-dotted border-b-bordergrey'>
                  <p>Planner N Maker</p>
                  <p className='ml-2 '>57, moti nagar</p>
              </div>
              <div className='flex font-thin'>
                  <p>Status</p>
                  <p className='ml-20'>Transaction type</p>
                  <p className='ml-20'>Floor</p>
                  <p className='ml-20'>Car parking</p>
              </div>
              <div className='flex font-thin'>
                  <p>Ready to move</p>
                  <p className='ml-16'>resale</p>
                  <p className='ml-32'>6</p>
                  <p className='ml-24'>3 covered</p>
              </div>
              <div className='flex justify-center items-center py-2 border-dotted border-b-2 border-b-bordergrey text-red'>
                  <p className=''>Get Documents Verified</p>
              </div>
              <div className='flex justify-between  mt-2'>
                     <div className='flex '>
                         <p className='bg-red py-2 px-2 text-white'>USP</p>
                         <p className='ml-2 text-sm mt-2'>Newly Constructed Property</p>
                     </div>
                     <div className='p-2 border-2 rounded-lg'>
                         <p>Download Brochure</p>
                     </div>
              </div>
              <div className='flex mt-5 justify-between '>
                  <div className=' text-white text-lg'>
                      <span className='bg-red py-2 px-3 rounded-lg'>Contact agent</span>
                      <span className='bg-red py-2 px-3 ml-3 rounded-lg'>Contact agent</span> 
                  </div>
                  <div>
                      <p>Share Property Feedback</p>
                  </div>
                 
              </div>
          </div>
      </div>
      <div className='flex  mt-10 '>
                      <div className='flex border-2 border-bordergrey justify-around w-[1000px] py-10 ml-28  '>
                          <div><i class="fa fa-home text-6xl text-red"></i></div>
                          <div className='mr-8'>
                             <div className='font-bold text-xl'> <span>Save Property</span></div>
                             <div> <span>Don't want to share your details with the agent right now?</span></div>
                          </div>
                          <div className='mt-6'><span  className='py-3 px-3 bg-red text-white rounded-lg'>Save Property for later</span></div>
                      </div>
                      <div className='border-2 border-bordergrey p-4 ml-2'>
                          <div className='flex'>
                            <img src="img/image1.jpg" alt="BigCo Inc. logo" class=" h-[30px] w-[30px] object-cover"/>  <span className='ml-2'>faiz</span><i class="fa fa-info-circle text-red ml-2 mt-1"></i>
                          </div>
                          <span >Certified Agent</span> 
                          <div><span className='text-sm'>+91 -99XXXXXX27</span></div>
                         <div className='mt-4'> <span className='px-2 py-2 bg-red text-white rounded-lg'>Contact agent</span> </div>
                      </div>
                  </div>
                  <div className='flex'>
                      <div className='border-2 border-bordergrey mt-4 w-[900px] ml-28 px-4 py-4 '>

                        <div className='py-1 border-b-2 border-b-bordergrey border-dotted'><span>Description</span></div>
                        <div className='py-2 border-b-2 border-b-bordergrey border-dotted'><span>Pay 10 for booking rest on possession Furnished two bedroom set with dinning hall Upto 90 Home Loan available Lift facility with power backup PM Avaas Yojana Benefits Upto 2,67,000 Modular kitchen with chimney Fancy lights in all rooms, latest fall ceiling Electricity connection are available Delhi Jal board & Submersible both water are available Walking distance from Metro Station Markets, schools, hospitals all are within 1 km 01 balcony Bathroom with modern facilities Branded Fans with 2yr warranty in all rooms Wardrobe & TV Panel 01 Iron Gate Wallpaper & Ro</span></div>
                        <div className='flex justify-between py-2 border-b-2 border-b-bordergrey border-dotted'>
                            <div className='text-xl font-light'><span>Price Breakup</span></div>
                            <div><span>₹ 25.5 Lac | ₹ 2,84,300 Stamp Duty, Registration Charges | ₹ 100 Monthly</span></div>
                            <div><i class="fa fa-info-circle text-red mr-1 mt-1"></i><span>See Other Charges</span></div>

                        </div>
                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Booking Amount</span></div> 
                          <div className='ml-10'><span>₹ 15000</span></div> 

                           
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Facilities</span></div> 
                          <div className='ml-24'><span>Power Back Up, Lift, Rain Water Harvesting, Gymnasium, Park, Reserved Parking, Water Storage, Private Terrace/Garden, Vaastu Compliant, Air Conditioned, Visitor Parking, Intercom Facility, Waste Disposal, Internet/Wi-Fi Connectivity, DTH Television Facility, RO Water System</span>
                        </div> 
                        </div>
                             
                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Address</span></div> 
                          <div className='ml-24'><span>Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh 2.5 Km From Aeon Sen Sok 11 Km From Independence Monumber</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Landmarks</span></div> 
                          <div className='ml-36'><span>near southern metro.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Facing</span></div> 
                          <div className='ml-[180px]'><span>south-east.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>REPAID</span></div> 
                          <div className='ml-[176px]'><span>NO.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Overlooking</span></div> 
                          <div className='ml-[130px]'><span>Main Road.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Flooring</span></div> 
                          <div className='ml-[162px]'><span>Wooden.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Water Availability</span></div> 
                          <div className='ml-[88px]'><span>24 Hours.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Status of Electricity</span></div> 
                          <div className='ml-[80px]'><span>No/Rare Powercut.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Lift</span></div> 
                          <div className='ml-[210px]'><span>0.</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Age of Construction</span></div> 
                          <div className='ml-[70px]'><span>6 years</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Units Available</span></div> 
                          <div className='ml-[120px]'><span>2</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Furnishing</span></div> 
                          <div className='ml-[146px]'><span>semi-furnished</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Type of Ownership</span></div> 
                          <div className='ml-[76px]'><span>Freehold</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Brokerage Response</span></div> 
                          <div className='ml-[67px]'><span>Brokers please contact</span>
                        </div> 
                        </div>

                        <div  className='flex  py-2 border-b-2 border-b-bordergrey border-dotted'>
                          <div className='text-xl font-light'><span>Amenities</span></div> 
                          <div className='ml-[150px]'><span>Visitor Parking</span></div> 
                          <div className='ml-[67px]'><span>Waste Disposal</span></div> 
                          <div className='ml-[67px]'><span>Rain Water Harvesting</span></div> 
                        </div>
                         <div className='mt-4' ><span className='px-2 py-2 bg-red rounded-lg text-white'>contact agent</span></div>
                         
                     
                     
                     
                     
                      </div>
                      <div className='py-2 px-2 border-2 border-bordergrey h-[500px] mt-4 ml-6'>
                               <form>
                                   <input placeholder='Name'  type="text" className='text-xl border-b-2 border-b-bordergrey outline-none' /><br/><br/>
                                   <input placeholder='E-mail'  type="mail" className='text-xl  border-b-2 border-b-bordergrey outline-none' /><br/><br/>
                                   <input placeholder='mobile-number'  type="number" className='text-xl  border-b-2 border-b-bordergrey outline-none' /><br/>
                                      
                                   <div className='mt-4'> <span className='text-xs '>I Agree to MagicBricks' Terms of Use</span></div>
                                   <div className='flex justify-center items-center mt-4 '> <span className='border-2 border-red hover:bg-red hover:text-white cursor-pointer px-2 py-2 rounded-lg'>Get Contact details</span></div>

                               </form>
                      </div>

                     
                  </div>

                  <div className=' text-2xl ml-20 mt-10'><span className='border-b-2  border-b-bordergrey py-1'>Properties in similar projects</span></div>
                  <div>
                  <Swiper className='mt-4'
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={5}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl  " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
     </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
     </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>     
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
    </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
     </SwiperSlide>
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>

     
    </Swiper>
                  </div>
                  
      </div>
      <Footer/>

      </>
  )
}

export default propertydetailspage