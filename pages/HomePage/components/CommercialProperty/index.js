import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CommercialProperty = () => {
  return (
      <>
       <div className="text-4xl font-light ml-6 mt-10 mb-10">
           <span> <span className="border-b-4 border-b-skyblue">we've</span> got Commercial properties</span>
       </div>

       <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
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
      <SwiperSlide>
      <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl mr-4 " >
         <img src="img/image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
          <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
         <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
     </div>
      </SwiperSlide>

     
    </Swiper>

      </>
  );
};

export default CommercialProperty;
