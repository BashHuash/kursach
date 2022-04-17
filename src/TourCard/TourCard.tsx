import React, { useState } from 'react';
import s from './TourCard.module.css';
import turkey from '../media/turkey.png';
import egypt from '../media/egypt.png';
import greece from '../media/greece.png';
import maldives from '../media/maldives.png';
import krym from '../media/krym.png'
import moscow from '../media/moscow.png'
import saintPetersburg from '../media/saintPetersburg.png'
import sochi from '../media/sochi.png'
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";


const srcArray = ['turkey', 'egypt', 'greece', 'maldives', 'krym', 'moscow', 'saintPetersburg', 'sochi'];

interface ITourCard {
    imgName: string
    hotels: number
    price: number
}

export const TourCard: React.FC<ITourCard> = ( props ) => {
    let bg;
    let title = '';
    let hotels;

    if ( props.imgName === srcArray[0] ) {
        bg = turkey;
        title = 'Турция';
    } else if ( props.imgName === srcArray[1] ) {
        bg = egypt;
        title = 'Египет';
    } else if ( props.imgName === srcArray[2] ) {
        bg = greece;
        title = 'Греция';
    } else if ( props.imgName === srcArray[3] ) {
        bg = maldives;
        title = 'Мальдивы';
    } else if ( props.imgName === srcArray[4] ) {
        bg = krym
        title = 'Крым'
    } else if ( props.imgName === srcArray[5] ) {
        bg = moscow
        title = 'Москва'
    } else if ( props.imgName === srcArray[6] ) {
        bg = saintPetersburg
        title = 'Санкт-Петербург'
    } else if ( props.imgName === srcArray[7] ) {
        bg = sochi
        title = 'Сочи'
    }

    const BGI = {
        backgroundImage: 'url(' + bg + ')',
    };

    if ( props.hotels === 1 ) {
        hotels = props.hotels + ' отель';
    } else {
        hotels = props.hotels + '+ отелей';
    }

    const [isModalActive, setModalActive] = useState( false )

    return (
        <div className={ isModalActive ? s.TourCard : s.TourCardHover }
             onClick={ () => setModalActive( ( prev ) => true ) }>
            <div className={ s.Scale }>
                <div style={ BGI } className={ s.Img }/>
            </div>
            <div className={ s.Title }>{ title }</div>
            <div className={ s.Hotels }>{ hotels }</div>
            <div className={ s.Price }>от { props.price } рублей за человека</div>
            <div className={ s.ModalChildren } onClick={ e => e.stopPropagation() }>
                <Modal title={ title } active={ isModalActive } setActive={ setModalActive }>
                    <div style={ BGI } className={ s.Img }/>
                    <div className={ s.Title }>{ title }</div>
                    {/* <Button text={ 'Посмотреть отели' }/> */}
                </Modal>
            </div>
        </div>
    );
};