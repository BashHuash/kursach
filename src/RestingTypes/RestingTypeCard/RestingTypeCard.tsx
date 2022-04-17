import React, { useState } from "react";
import s from './RestingTypeCard.module.css'
import { ModalRest } from "../../ModalRest/ModalRest";
import restingType1 from '../../media/restingType1.png';
import restingType2 from '../../media/restingType2.png';
import restingType3 from '../../media/restingType3.png';
import restingType4 from '../../media/restingType4.png';
import restingType5 from '../../media/restingType5.png';
import restingType6 from '../../media/restingType6.png';
import restingType7 from '../../media/restingType7.png';
import restingType8 from '../../media/restingType8.png';
import restingType9 from '../../media/restingType9.png';

interface IRestingTypeCard {
    imgName: string
}

export const RestingTypeCard: React.FC<IRestingTypeCard> = ( props ) => {
    const [isModalActive, setIsModalActive] = useState( false )

    let imgSrc = ''

    if ( props.imgName === 'restingType1' ) {
        imgSrc = restingType1
    } else if ( props.imgName === 'restingType2' ) {
        imgSrc = restingType2
    } else if ( props.imgName === 'restingType3' ) {
        imgSrc = restingType3
    } else if ( props.imgName === 'restingType4' ) {
        imgSrc = restingType4
    } else if ( props.imgName === 'restingType5' ) {
        imgSrc = restingType5
    } else if ( props.imgName === 'restingType6' ) {
        imgSrc = restingType6
    } else if ( props.imgName === 'restingType7' ) {
        imgSrc = restingType7
    } else if ( props.imgName === 'restingType8' ) {
        imgSrc = restingType8
    } else if ( props.imgName === 'restingType9' ) {
        imgSrc = restingType9
    }

    return (
        <div className={ s.RestingTypeCard } onClick={ () => setIsModalActive( ( prev ) => !prev ) }>
            <img src={ imgSrc } alt="img"/>
            <ModalRest imgSrc={ imgSrc } name={ props.imgName } isModalActive={ isModalActive }
                       setIsModalActive={ setIsModalActive }/>
        </div>
    )
}