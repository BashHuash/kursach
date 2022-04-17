import React from "react";
import s from './PropmotionsPage.module.css'
import { Header } from "../MainSec/Header/Header";
import { Footer } from "../MainSec/TourSec/Footer/Footer";
import { PromotionCard } from "./PromotionCard/PromotionCard";


export const PromotionsPage: React.FC = () => {
    return (
        <div id={'PromPageId'} className={ s.PromPage }>
            <Header/>
            <div className={ s.PromPageCon }>
                <PromotionCard imgName={ 'promotion1' }/>
                <PromotionCard imgName={ 'promotion2' }/>
                <PromotionCard imgName={ 'promotion3' }/>
                <PromotionCard imgName={ 'promotion4' }/>
                <PromotionCard imgName={ 'promotion5' }/>
                <PromotionCard imgName={ 'promotion6' }/>
                <PromotionCard imgName={ 'promotion7' }/>
                <PromotionCard imgName={ 'promotion8' }/>
                <PromotionCard imgName={ 'promotion9' }/>
            </div>
            <Footer/>
        </div>
    )
}