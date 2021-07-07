import React from 'react';
import PageNav from "../components/Header/PageNav";
import Map from "../components/Map/Map";
import Hero from "../components/Hero/Hero"
const MainPage = () => {
    return (
       <>
       <PageNav/>
          <Hero></Hero>
           <Map/>
       </>
    );
};

export default MainPage;