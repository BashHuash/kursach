import React, { useEffect } from 'react';
import s from './MainSec.module.css';
import { Header } from './Header/Header';
import { MainContent } from './MainContent/MainContent';
import { TourSec } from "./TourSec/TourSec";
import { useLocation } from "react-router-dom";


export const MainSec: React.FC = () => {
    // const location = useLocation()
    //
    // useEffect(
    //     () => {
    //         const element = document.getElementById( location.hash.replace( "#", "" ) );
    //
    //         setTimeout( () => {
    //             window.scrollTo( {
    //                 behavior: element ? "smooth" : "auto",
    //                 top: element ? element.offsetTop : 0
    //             } );
    //         }, 100 );
    //     }, [location] );


    return (
        <div id={ 'MainSecId' } className={ s.MainSec }>
            <div className={ s.bg }>
                <Header/>
                <MainContent/>
            </div>
            <TourSec/>
        </div>
    );
};