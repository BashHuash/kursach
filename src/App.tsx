import React, { useState } from 'react';
import './App.css';
import { MainSec } from './MainSec/MainSec';
import { Route, Routes } from 'react-router-dom';
import { PromotionsPage } from "./PromotionsPage/PromotionsPage";
import { MyContext } from "./Context/MyContext";
import { RestingTypes } from './RestingTypes/RestingTypes';
import { Memo } from "./Memo/Memo";
import { Contacts } from "./Contacts/Contacts";


// export const mainRoute = '/'

export const App: React.FC = () => {
    const [isBurger, setIsBurger] = useState( false )
    // const [isVisible, set]

    const toggleIsBurger = () => {
        return setIsBurger( ( prev ) => true )
    }

    const removeIsBurger = () => {
        return setIsBurger( ( prev ) => false )
    }

    return (
        <MyContext.Provider value={ {
            toggleIsBurger, removeIsBurger, isBurger
        } }>
            <div className="App">
                <Routes>
                    <Route path='/' element={ <MainSec/> }/>
                    <Route path='/PromotionsPage' element={ <PromotionsPage/> }/>
                    <Route path='/RestingTypes' element={ <RestingTypes/> }/>
                    <Route path='/Memo' element={ <Memo/> }/>
                    <Route path='/Contacts' element={ <Contacts/> }/>
                </Routes>
            </div>
        </MyContext.Provider>
    );
};