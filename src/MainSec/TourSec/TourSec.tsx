import React from 'react';
import s from './TourSec.module.css';
import { TourSecCon } from './TourSecCon/TourSecCon';
import { Footer } from './Footer/Footer';


export const TourSec: React.FC = () => {
    return (
        <div id={ 'TourSecId' } className={ s.TourSec }>
            <TourSecCon/>
            <Footer/>
        </div>
    );
};