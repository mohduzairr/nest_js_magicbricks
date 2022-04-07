import React from 'react'

export const NearByCities = () => {
    return (
        <>
         <div className="ml-10  lg:mt-4 mt-1 sm:text-sm">
            <span className="">Nearby Cities</span>
          </div>

          <div className="flex justify-evenly pl-2 lg:mt-2">
          <div className="lg:text-sm text-xs font-light">
            <span>Gurgon</span>
          </div>
          <div className="lg:ml-10 ml-1 lg:text-sm text-xs font-light">
            <span>Greater Noida</span>
          </div>
          <div className="lg:ml-10 ml-1 lg:text-sm text-xs font-light">
            <span>Gaziabad</span>
          </div>
          <div className="lg:ml-10 ml-1 lg:text-sm text-xs font-light">
            <span>Noida</span>
          </div>
         
          </div>
        </>
    )
}
