import React from 'react';
import s from './StandardMenu.module.css';
import { NavLink } from 'react-router-dom';


export const StandardMenu: React.FC = () => {
    const handleClick = () => {
        setTimeout( () => {
            const element = document.getElementById( 'TourSecId' )
            window.scrollTo( {
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            } );
        }, 100 );
    }

    return (
        <div className={ s.Menu }>
            <NavLink className={ ( { isActive } ) => isActive ? s.Active : '' }
                     to='/'>Главная</NavLink>
            <NavLink onClick={ handleClick } to={ '/' }>Туры</NavLink>
            <NavLink className={ ( { isActive } ) => isActive ? s.Active : '' }
                     to='/PromotionsPage'>Акции</NavLink>
            <NavLink className={ ( { isActive } ) => isActive ? s.Active : '' }
                     to='/RestingTypes'>Типы отдыха</NavLink>
        </div>
    )
};