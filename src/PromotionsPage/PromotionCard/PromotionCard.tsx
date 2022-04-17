import React, { useState } from "react";
import s from './PromotionCard.module.css'
import promotion1 from '../../media/promotion1.png'
import promotion2 from '../../media/promotion2.png'
import promotion3 from '../../media/promotion3.png'
import promotion4 from '../../media/promotion4.png'
import promotion5 from '../../media/promotion5.png'
import promotion6 from '../../media/promotion6.png'
import promotion7 from '../../media/promotion7.png'
import promotion8 from '../../media/promotion8.png'
import promotion9 from '../../media/promotion9.png'
import { ModalPromotion } from "../../ModalPromotion/ModalPromotion";

interface IPromotionCard {
    imgName: string
}

export const PromotionCard: React.FC<IPromotionCard> = ( props ) => {
    let img = ''

    if ( props.imgName === 'promotion1' ) {
        img = promotion1
    } else if ( props.imgName === 'promotion2' ) {
        img = promotion2
    } else if ( props.imgName === 'promotion3' ) {
        img = promotion3
    } else if ( props.imgName === 'promotion4' ) {
        img = promotion4
    } else if ( props.imgName === 'promotion5' ) {
        img = promotion5
    } else if ( props.imgName === 'promotion6' ) {
        img = promotion6
    } else if ( props.imgName === 'promotion7' ) {
        img = promotion7
    } else if ( props.imgName === 'promotion8' ) {
        img = promotion8
    } else if ( props.imgName === 'promotion9' ) {
        img = promotion9
    }

    const [isModalPromotionActive, setModalPromotionActive] = useState( false )

    return (
        <div onClick={ () => setModalPromotionActive( ( prev ) => !prev ) } className={ s.PromotionCard }>
            <img src={ img } alt="img"/>
            <ModalPromotion imgSrc={ img } name={ props.imgName } isModalActive={ isModalPromotionActive } setModalActive={ setModalPromotionActive }/>
        </div>
    )
}