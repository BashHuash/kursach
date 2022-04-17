import React from "react";
import s from './ContactCard.module.css'
import vkIcon from '../../media/vkIcon.png'
import emailIcon from '../../media/emailIcon.png'
import phoneIcon from '../../media/phoneIcon.png'

interface IContactCard {
    text: string
    imgName: string
}

export const ContactCard: React.FC<IContactCard> = ( props ) => {
    let path = ''
    let link = ''

    if ( props.imgName === 'vkIcon' ) {
        path = vkIcon
        link = 'https://vk.com/simpmax'
    } else if ( props.imgName === 'emailIcon' ) {
        path = emailIcon
        link = 'https://e.mail.ru/compose?to=alekseevmaksim2003@mail.ru'
    } else if ( props.imgName === 'phoneIcon' ) {
        path = phoneIcon
    }

    return (
        <div className={ s.ContactCard }>
            <a href={ link } onClick={ ( e ) => {
                if ( link === '' ) {
                    e.preventDefault()
                }
            } }>
                <img src={ path } alt="img"/>
                <p>{ props.text }</p>
            </a>
        </div>
    )
}