import React from "react";
import s from './RestingTypes.module.css'
import { Header } from "../MainSec/Header/Header";
import { Footer } from "../MainSec/TourSec/Footer/Footer";
import { RestingTypeCard } from "./RestingTypeCard/RestingTypeCard";


export const RestingTypes: React.FC = () => {
    return (
        <div id={ 'RestingTypesId' } className={ s.RestingTypes }>
            <Header/>
            <div className={ s.RestingTypesCon }>
                <RestingTypeCard imgName={ 'restingType1' }/>
                <RestingTypeCard imgName={ 'restingType2' }/>
                <RestingTypeCard imgName={ 'restingType3' }/>
                <RestingTypeCard imgName={ 'restingType4' }/>
                <RestingTypeCard imgName={ 'restingType5' }/>
                <RestingTypeCard imgName={ 'restingType6' }/>
                <RestingTypeCard imgName={ 'restingType7' }/>
                <RestingTypeCard imgName={ 'restingType8' }/>
                <RestingTypeCard imgName={ 'restingType9' }/>
            </div>
            <Footer/>
        </div>
    )
}