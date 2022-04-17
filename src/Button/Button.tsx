import React, { createRef, RefObject, useState } from 'react';
import s from './Button.module.css';
import tourSecConS from '../MainSec/TourSec/TourSecCon/TourSecCon.module.css';
import { NavLink } from "react-router-dom";


interface IButton {
    text: string
}

export const Button: React.FC<IButton> = ( props ) => {
    const [isVisible, setIsVisible] = useState( true )

    let path = '';

    if ( props.text === 'Выбрать тур' ) {
        path = '#TourSecId';
    }

    const text = createRef<HTMLParagraphElement>()

    if(props.text === 'Посмотреть акции'){
        return (
            <NavLink to={'/PromotionsPage'}>
                <button className={ s.Button }>
                    { props.text }
                </button>
            </NavLink>
        )
    } else {
        return (
            <a id={ 'link' } onClick={ ( e ) => {
                if ( props.text === 'Посмотреть ещё' ) {
                    setIsVisible( ( prev ) => !prev )
                    e.preventDefault()
                    if ( isVisible ) {
                        // @ts-ignore
                        document.getElementById( 'extraCards' ).classList.remove( tourSecConS.invisible )
                        // @ts-ignore
                        document.getElementById( 'extraCards' ).classList.add( tourSecConS.TourCards )
                    } else {
                        // @ts-ignore
                        document.getElementById( 'extraCards' ).classList.remove( tourSecConS.TourCards )
                        // @ts-ignore
                        document.getElementById( 'extraCards' ).classList.add( tourSecConS.invisible )
                    }
                }
            } } href={ path }>
                <button className={ s.Button }>
                    <p ref={ text }>{ !isVisible ? 'Свернуть' : props.text }</p>
                </button>
            </a>
        );
    }
};