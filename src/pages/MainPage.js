import React from 'react';
import PageNav from "../components/Header/PageNav";
import Map from "../components/Map/Map";
import HeaderImg from "../components/Header/HeaderImg";

const MainPage = () => {
    return (
       <>
       <PageNav/>
           <HeaderImg/>
           <Map/>
       </>
    );
};

export default MainPage;