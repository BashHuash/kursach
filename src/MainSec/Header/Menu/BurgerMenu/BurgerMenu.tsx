import React, { useEffect, useState } from 'react';
import s from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';

interface IBurgerMenu {
    isBurger: boolean
}

export const BurgerMenu: React.FC<IBurgerMenu> = ( props ) => {
    const [isOpen, setIsOpen] = useState( false )
    const [blurHeight, setBlurHeight] = useState( 1664 )

    useEffect( () => {
        if ( window.location.pathname === '/' ) {
            window.addEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )

            document.addEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )

            document.addEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )
        } else if ( window.location.pathname === '/PromotionsPage' ) {
            window.addEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )

            document.addEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )

            document.addEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )
        } else if ( window.location.pathname === '/RestingTypes' ) {
            window.addEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )

            document.addEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )

            document.addEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )
        } else if ( window.location.pathname === '/Memo' ) {
            window.addEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )

            document.addEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )

            document.addEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )
        } else if ( window.location.pathname === '/Contacts' ) {
            window.addEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )

            document.addEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )

            document.addEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )
        }

        return () => {
            window.removeEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )

            document.removeEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )

            document.removeEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MainContentId' ).clientHeight + document.getElementById( 'TourSecConId' ).clientHeight )
            } )

            window.removeEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )

            document.removeEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )

            document.removeEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'PromPageId' ).clientHeight - 175 - 245 )
            } )

            window.removeEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )

            document.removeEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )

            document.removeEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'RestingTypesId' ).clientHeight - 175 - 245 )
            } )

            window.removeEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )

            document.removeEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )

            document.removeEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'MemoConId' ).clientHeight )
            } )

            window.removeEventListener( 'resize', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )

            document.removeEventListener( 'DOMContentLoaded', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )

            document.removeEventListener( 'scroll', () => {
                // @ts-ignore
                setBlurHeight( ( prev ) => document.getElementById( 'ContactsConId' ).clientHeight - 175 + 170 )
            } )
        }
    }, [] )

    const BH = {
        height: blurHeight - 15
    }

    const menuBtnTopDivStyle = {
        transform: 'translateY(18px) rotate(45deg)',
        transition: 'transform .25s linear, background-color .15s linear'
    };

    const menuBtnCentralDivStyle = {
        opacity: '0',
        transition: 'opacity .01s linear'
    };

    const menuBtnBotDivStyle = {
        transform: 'translateY(-18px) rotate(-45deg)',
        transition: 'transform .25s linear, background-color .15s linear'
    };

    return (
        <div className={ s.Menu }>
            <div className={ s.MenuBtn }
                 onClick={ () => {
                     setIsOpen( ( prev ) => !prev );
                 } }>
                <div
                    style={ isOpen ? menuBtnTopDivStyle : { transition: 'transform .25s, background-color .15s linear' } }/>
                <div
                    style={ isOpen ? menuBtnCentralDivStyle : { transition: 'opacity .25s linear, background-color .15s linear' } }/>
                <div
                    style={ isOpen ? menuBtnBotDivStyle : { transition: 'transform .25s, background-color .15s linear' } }/>
            </div>
            <div onClick={ e => e.stopPropagation() }
                 className={ isOpen ? s.MenuItemsShown : s.MenuItemsHidden }>
                <NavLink onClick={ () => setIsOpen( () => false ) }
                         className={ ( { isActive } ) => isActive ? s.Active : '' }
                         to='/'>Главная</NavLink>
                { document.location.pathname === '/' ? (
                    <a onClick={ () => setIsOpen( () => false ) } href='#TourSecId'>Туры</a>
                ) : (
                    <a href='/#TourSecId'>Туры</a>
                ) }
                <NavLink className={ ( { isActive } ) => isActive ? s.Active : '' }
                         to='/PromotionsPage'>Акции</NavLink>
                <NavLink className={ ( { isActive } ) => isActive ? s.Active : '' }
                         to='/RestingTypes'>Типы отдыха</NavLink>
            </div>
            <div style={ BH } onClick={ () => setIsOpen( () => false ) }
                 className={ isOpen ? s.BlurShown : s.BlurHidden }/>
        </div>
    );
};