import React from "react";
import s from './ModalPromotion.module.css'

interface IModalPromotion {
    isModalActive: boolean
    setModalActive: any
    name: string
    imgSrc: string
}

export const ModalPromotion: React.FC<IModalPromotion> = ( props ) => {
    let title = ''
    let info = ''

    if ( props.name === 'promotion1' ) {
        title = 'Акция "Отель дня"'
        info = 'В рамках данной акции, Вы можете получить скидку до 40% на случайный отель.'
    } else if ( props.name === 'promotion2' ) {
        title = 'Акция "2+2=2"'
        info = 'В рамках данной акции, дети отдыхают бесплатно.'
    } else if ( props.name === 'promotion3' ) {
        title = 'Акция "Самолёт"'
        info = 'В рамках данной акции, Вы можете получить до 80000 бонусов на нашу бонусную карту.'
    } else if ( props.name === 'promotion4' ) {
        title = 'Акция "Все расходы за наш счёт"'
        info = 'В рамках данной акции, все непредвиденные расходы будут оплачены нашей туристической фирмой.'
    } else if ( props.name === 'promotion5' ) {
        title = 'Акция "ПЦР-тест"'
        info = 'В рамках данной акции, Вы можете бесплатно сдать ПЦР-тест при оформлении тура.'
    } else if ( props.name === 'promotion6' ) {
        title = 'Акция "Отели"'
        info = 'В рамках данной акции, проживание в нескольких популярных отелях будет доступно Вам со скидкой до 30%.'
    } else if ( props.name === 'promotion7' ) {
        title = 'Акция "Квартира"'
        info = 'В рамках данной акции, при покупке квартиры по нашей бонусной карте, Вы можете выиграть бесплатное путешествие.'
    } else if ( props.name === 'promotion8' ) {
        title = 'Акция "Позволь себе больше"'
        info = 'В рамках данной акции, предоплата будет минимальной (до 65% от полной стоимости).'
    } else if ( props.name === 'promotion9' ) {
        title = 'Акция "Fast Track"'
        info = 'В рамках данной акции, при оформлении тура в Турцию, вы пройдёте паспортный контроль в скоростном режиме.'
    }

    return (
        <div className={ props.isModalActive ? s.ModalPromActive : s.ModalProm }>
            <div className={ s.ModalPromCon } onClick={ ( e ) => e.stopPropagation() }>
                <div className={ s.ClosePanel }
                     onClick={ () => props.setModalActive( false ) }>
                    <div className={ s.CloseBtn }>
                        <div/>
                        <div/>
                    </div>
                </div>
                <div className={ s.Padding }>
                    <img src={ props.imgSrc } alt="img"/>
                    <div className={ s.Title }>{ title }</div>
                    <div className={ s.Info }>{ info }</div>
                    <div className={ s.Number }>Подробнее по номеру <br/> 8 (917) 379-52-83</div>
                </div>
            </div>
        </div>
    )
}