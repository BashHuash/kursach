import React from "react";
import s from './Memo.module.css'
import { Header } from "../MainSec/Header/Header";
import { Footer } from "../MainSec/TourSec/Footer/Footer";

export const Memo: React.FC = () => {
    return (
        <div className={ s.Memo }>
            <Header/>
            <div id={'MemoConId'} className={ s.MemoCon }>
                <div className={ s.MainTitle }>Памятка для туриста</div>
                <div className={ s.Title }>Документы</div>
                <p>
                    Перед отъездом проверьте наличие следующих документов: <br/>
                    1. Загранпаспортов <br/>
                    Несовершеннолетний гражданин Российской Федерации, следующий совместно хотя бы с одним из родителей,
                    может выезжать из РФ: <br/>
                    - только по собственному заграничному паспорту, если у родителя/ей биометрический паспорт нового
                    образца, <br/>
                    - без собственного паспорта, если ребенок вписан в паспорт сопровождающих родителей старого образца
                    (не биометрический) <br/>
                    2. Авиабилетов, страховых полисов, ваучеров, справки на вывоз наличной валюты (при необходимости),
                    водительских прав (если планируете брать автомобиль напрокат), рекомендуем иметь согласие обоих
                    родителей / родителя (для детей, выезжающих без родителей / родителя) и свидетельство о рождении
                    ребенка (для детей, выезжающих с одним из родителей).
                </p>
            </div>
            <Footer/>
        </div>
    )
}

// •