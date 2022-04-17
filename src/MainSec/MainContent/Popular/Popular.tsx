import React from 'react';
import s from './Popular.module.css';
import { TourCard } from '../../../TourCard/TourCard';


export const Popular: React.FC = () => {
    return (
        <div className={s.Popular}>
            <h1>Самый популярный тур</h1>
            <TourCard imgName={'turkey'} hotels={10} price={9400}/>
        </div>
    );
};