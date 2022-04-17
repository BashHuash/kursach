import React from 'react';
import { Button } from '../../../Button/Button';
import s from './About.module.css';


export const About: React.FC = () => {
    return (
        <div className={s.About}>
            <h1>Мы - компания "<span>BIG</span>travel" <br/> Ваш отдых - наша
                забота!</h1>
            <p>Мы являемся одной из лучших туристических компаний Росии. <br/>
                У нас 50+ довольных клиентов за месяц. <br/>
                Мы организовываем туры в 3+ стран мира. <br/>
                У нас нет никаких возрастных ограничений.</p>
            <div className={s.Buttons}>
                <Button text='Выбрать тур'/>
                <Button text='Посмотреть акции'/>
            </div>
        </div>
    );
};