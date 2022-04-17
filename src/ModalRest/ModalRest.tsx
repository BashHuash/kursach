import React from "react";
import s from './ModalRest.module.css'

interface IModalRest {
    isModalActive: boolean
    setIsModalActive: any
    name: string
    imgSrc: string
}

export const ModalRest: React.FC<IModalRest> = ( props ) => {
    let title = ''
    let info = ''

    if ( props.name === 'restingType1' ) {
        title = 'Отдых в стиле ELITE'
        info = 'Подойдёт для тех, кто ценит, прежде всего, качественный сервис, и всегда выбирает только лучшее.'
    } else if ( props.name === 'restingType2' ) {
        title = 'Корпоративный отдых'
        info = 'Подойдёт для слаженного коллектива.'
    } else if ( props.name === 'restingType3' ) {
        title = 'Семейный отдых'
        info = 'Подойдёт для дружной семьи'
    } else if ( props.name === 'restingType4' ) {
        title = 'СПА-отдых'
        info = 'Подойдёт для тех, кто хочет не только отдохнуть, но и поправить здоровье.'
    } else if ( props.name === 'restingType5' ) {
        title = 'Экономичный отдых'
        info = 'Подойдёт для тех, кто хочет получить максимум, при этом потратив минимум.'
    } else if ( props.name === 'restingType6' ) {
        title = 'Экскурсионные туры'
        info = 'Подойдёт для тех, кто любит посещать достопримечательности.'
    } else if ( props.name === 'restingType7' ) {
        title = 'Горнолыжные туры'
        info = 'Подойдёт для тех, кто любит экстремальный горнолыжный спорт.'
    } else if ( props.name === 'restingType8' ) {
        title = 'OTI Hotels and Resorts International'
        info = 'Подойдёт для тех, кто хочеть получить гарантию возврата денег.'
    } else if ( props.name === 'restingType9' ) {
        title = 'Городские отели'
        info = 'Подойдёт для тех, кто любит всегда быть в центре событий.'
    }

    return (
        <div className={ props.isModalActive ? s.ModalRestActive : s.ModalRest }>
            <div className={ s.ModalRestCon } onClick={ ( e ) => e.stopPropagation() }>
                <div className={ s.ClosePanel } onClick={ () => props.setIsModalActive( false ) }>
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