import React from 'react';
import s from './MainContent.module.css'
import { About } from './About/About';
import { Popular } from './Popular/Popular';

export const MainContent: React.FC = () => {
    return (
        <div id={ 'MainContentId' } className={ s.MainContent }>
            <About/>
            <Popular/>
        </div>
    );
};