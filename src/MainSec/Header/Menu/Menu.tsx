import React, { useContext, useState } from 'react';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { StandardMenu } from './StandardMenu/StandardMenu';
import s from './Menu.module.css'
import { MyContext } from "../../../Context/MyContext";


export const Menu: React.FC = () => {
    // @ts-ignore
    const { toggleIsBurger, removeIsBurger, isBurger } = useContext( MyContext )

    window.addEventListener( 'resize', () => {
        window.innerWidth <= 770 ? toggleIsBurger() : removeIsBurger()
    } )

    document.addEventListener( 'DOMContentLoaded', () => {
        window.innerWidth <= 770 ? toggleIsBurger() : removeIsBurger()
    } )

    if ( !isBurger ) {
        return (
            <div className={ s.Menu }>
                <StandardMenu/>
            </div>
        )
    } else {
        return (
            <BurgerMenu isBurger={ isBurger }/>
        );
    }
};