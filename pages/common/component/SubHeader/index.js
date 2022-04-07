import React, { useState } from 'react'
import { BuyBox } from './components/BuyBox'
import { HelpBox } from './components/HelpBox'
import { HoamloanBox } from './components/HoamloanBox'
import { PropertyServicesBox } from './components/PropertyServicesBox'
import { RentBox } from './components/RentBox'
import { ResourceBox } from './components/ResourceBox'
import { SellBox } from './components/SellBox'
import SubHeaderBox from './components/SubHeaderBox'

export const SubHeader = () => {
   const [sellhide, setSellhide] = useState(false);
  const [buyhide, setBuyhide] = useState(false);
  const [renthide, setRenthide] = useState(false);
  const [hoamloanhide, setHoamloanhide] = useState(false);
  const [propertyserviceshide, setPropertyServiceshide] = useState(false);
  const [resourcehide, setResourcehide] = useState(false);
  const [helphide, setHelphide] = useState(false);

    return (
       <>
         <SubHeaderBox
        sellhide={sellhide}
        setSellhide={setSellhide}
        buyhide={buyhide}
        setBuyhide={setBuyhide}
        renthide={renthide}
        setRenthide={setRenthide}
        hoamloanhide={hoamloanhide}
        setHoamloanhide={setHoamloanhide}
        propertyserviceshide={propertyserviceshide}
        setPropertyServiceshide={setPropertyServiceshide}
        resourcehide={resourcehide}
        setResourcehide={setResourcehide}
        helphide={helphide}
        setHelphide={setHelphide}
      />

    { buyhide && <BuyBox setBuyhide={setBuyhide}/> }    
   { renthide && <RentBox setRenthide={setRenthide}/>}
   { sellhide &&  <SellBox setSellhide={setSellhide}/>}
   {hoamloanhide && <HoamloanBox setHoamloanhide={setHoamloanhide}/>}
   { propertyserviceshide && <PropertyServicesBox setPropertyServiceshide={setPropertyServiceshide}/>}
  { resourcehide && <ResourceBox setResourcehide={setResourcehide}/>}
 { helphide && <HelpBox setHelphide={setHelphide}/>}
       </>
    )
}
