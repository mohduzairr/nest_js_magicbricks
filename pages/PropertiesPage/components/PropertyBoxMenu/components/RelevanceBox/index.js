import React from 'react'

const RelevanceBox = ({setRelevance}) => {
  return (
    <>
    <div onMouseEnter={()=>setRelevance(true)} onMouseLeave={()=>setRelevance(false)} className='flex ml-[53rem] z-10 bg-white absolute  pb-4 '>
      <div className='h-64 shadow-2xl border-2 border-bordergrey w-48 z-20 '>
          <div className='p-1  hover:bg-bordergrey'><span> Relevance</span></div>
          <div className='p-2 hover:bg-bordergrey' ><span>Price - Low to High</span></div>
          <div className='p-2 hover:bg-bordergrey'><span>Price - High to Low</span></div>
          <div className='p-2 hover:bg-bordergrey'><span>Most Recent</span></div>
          <div className='p-2 hover:bg-bordergrey'><span>Rate/sqft - High to Low</span></div>
          <div className='p-2 hover:bg-bordergrey'><span>Rate/sqft - Low to High</span></div>


      </div>
      </div>
    </>
  )
}

export default RelevanceBox