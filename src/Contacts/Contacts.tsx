import React from "react";
import s from './Contacts.module.css'
import { Header } from "../MainSec/Header/Header";
import { Footer } from "../MainSec/TourSec/Footer/Footer";
import { ContactCard } from "./ContactCard/ContactCard";


export const Contacts: React.FC = () => {
    return (
        <div className={ s.Contacts }>
            <Header/>
            <div id={ 'ContactsConId' } className={ s.ContactsCon }>
                <div className={ s.ContactsCards }>
                    <ContactCard text={ 'Телефон менеджера 8 (917) 379-52-83' } imgName={ 'phoneIcon' }/>
                    <ContactCard text={ 'vk.com/simpmax' } imgName={ 'vkIcon' }/>
                    <ContactCard text={ 'alekseevmaksim2003@mail.ru' } imgName={ 'emailIcon' }/>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150.543502659849!2d56.03049775833037!3d54.77843754201324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d939d3f53be057%3A0x7cac48c31545d39e!2z0YPQuy4g0L_RgC3Rgi4g0J7QutGC0Y_QsdGA0Y8sIDEzNiwg0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9LCA0NTAwNTU!5e0!3m2!1sru!2sru!4v1646929954203!5m2!1sru!2sru"
                    style={ { border: 0 } }/>
            </div>
            <Footer/>
        </div>
    )
}