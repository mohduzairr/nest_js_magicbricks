import React from 'react';
import { Header } from '../common/component/Header';
import PropertiesHeader from './components/PropertiesHeader';
import PropertyBox from './components/PropertyBox';
import PropertyBoxMenu from './components/PropertyBoxMenu';
import Footer from '../common/component/Footer';
const PropertiesPage = () => {
  
  return (
      <>
      <Header/>
         <PropertiesHeader/>
         <PropertyBoxMenu/>
          <PropertyBox/>
          <PropertyBox/>
          <PropertyBox/>

         
         <Footer/> 


      </>
  );
};

export default PropertiesPage;
