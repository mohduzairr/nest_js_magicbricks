import React from 'react';
 import Footer from '../common/component/Footer';
 import { Header } from '../common/component/Header';
 import { SubHeader } from '../common/component/SubHeader';
import AdvicesTools from './components/AdvicesTools';
import ChennaiProperty from './components/ChennaiProperty';
import CommercialProperty from './components/CommercialProperty';
import PostpropertyButton from './components/PostPropertyButton';
import PropertyBox from './components/PropertyBox';
import PublicProperty from './components/PublicProperty';
import SearchBox from './components/SearchBox';

const HomePage = () => {
  return( 
         <>
            <Header/>
             <SubHeader/>
            {/* <SearchBox/> */}
            <ChennaiProperty/>
         <PropertyBox/>
            <CommercialProperty/>
            <PublicProperty/>
            <AdvicesTools/>
            <PostpropertyButton/>
             <Footer/> 

         </>
  );
};

export default HomePage;
