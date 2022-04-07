import React, { useState } from 'react'
import PropertyBox from '../PropertyBox'
import RelevanceBox from './components/RelevanceBox'
import Head from 'next/head';

const PropertyBoxMenu = () => {
  const [relevance, setRelevance] = useState(false)
  const [list, setList] = useState(false)
  return (
      <>
       <Head>
        <title></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
        <div className='flex mt-32 ml-36  '>
            <div className='p-1 text-lg border-x-2 border-x-bordergrey border-t-2 border-t-red px-6 '>Properties</div>
            <div  className='p-2 pr-6 pl-6 text-lg   hover:border-r-2 border-r-bordergrey hover:border-t-2 border-t-red hover:transition duration-300'>New Project</div>
            <div  className='p-2 pr-6 pl-6 text-lg   hover:border-r-2 border-r-bordergrey hover:border-t-2 hover:border-l-2 border-l-bordergrey border-t-red hover:transition duration-300'>Top Agents</div>
        </div>
        <div className='h-10 ml-36 w-[62rem] items-center flex justify-between pr-10  shadow-2xl mt-2 '>
          <div className='text-lg font-semibold'><span>Properties in kampot for Delhi</span></div>
          <div className='flex items-center '>
            <div onMouseEnter={()=>setRelevance(true)} onMouseLeave={()=>setRelevance(false)} className='border-2 border-bordergrey rounded-lg p-2 mr-4 '><span>Sort By</span> <span>Relevance</span>{ relevance ?<i  class="fa fa-caret-up ml-1"></i>:<i  class="fa fa-caret-down ml-1"></i>}</div>
            <div  onMouseEnter={()=>setList(true)} onMouseLeave={()=>setList(false)} className='border-2 border-bordergrey  rounded-lg p-2 '><i  class="fa fa-list text-sm"></i><span className='ml-2'>List</span>{ list ?<i  class="fa fa-caret-up ml-1"></i>:<i  class="fa fa-caret-down ml-1"></i>}</div>
          </div>
        </div>
      {relevance && <RelevanceBox setRelevance={setRelevance} />}
      </>
  )
}

export default PropertyBoxMenu