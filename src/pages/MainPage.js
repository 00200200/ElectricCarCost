import React from 'react';
import PageNav from "../components/Header/PageNav";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/footer";
import Main from "../components/MainBodyUnderHeader/Main";

const MainPage = () => {
    return (
       <>
       <PageNav/>
       <Main></Main>
           <Map/>
           <Footer/>
       </>
    );
};

export default MainPage;