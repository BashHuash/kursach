import React from 'react';
import s from './TourSecCon.module.css';
import { TourCard } from '../../../TourCard/TourCard';
import { Button } from '../../../Button/Button';


export const TourSecCon: React.FC = () => {
    return (
        <div id={ 'TourSecConId' } className={ s.TourSecCon }>
            <div className={ s.Title }>Туры</div>
            <div className={ s.TourCards }>
                <TourCard imgName={ 'turkey' } hotels={ 2 } price={ 9400 }/>
                <TourCard imgName={ 'egypt' } hotels={ 2 } price={ 12000 }/>
                <TourCard imgName={ 'greece' } hotels={ 2 } price={ 45700 }/>
                <TourCard imgName={ 'maldives' } hotels={ 1 } price={ 122000 }/>
            </div>
            <div id="extraCards" className={ s.invisible }>
                <TourCard imgName={ 'sochi' } hotels={ 2 } price={ 7800 }/>
                <TourCard imgName={ 'krym' } hotels={ 2 } price={ 5600 }/>
                <TourCard imgName={ 'saintPetersburg' } hotels={ 2 } price={ 9700 }/>
                <TourCard imgName={ 'moscow' } hotels={ 2 } price={ 11300 }/>
            </div>
            <div className={ s.Btn }>
                <Button text={ 'Посмотреть ещё' }/>
            </div>
        </div>
    );
};