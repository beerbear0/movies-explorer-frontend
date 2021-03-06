import React from 'react';
import Header from "../Header/Header";
import "./Promo.css"

function Promo(props) {
    return (
        <div className='promo'>
            {props.loggedIn ?
                (<Header
                    loggedIn={props.loggedIn}
                    linkNum1='Фильмы'
                    linkNum2='Сохраненые фильмы'
                    headerHref1='/movies'
                    headerHref2='/saved-movies'
                    />) :
           ( <Header
                loggedIn={props.loggedIn}
                linkNum1='Регистрация'
                linkNum2='Войти'
                headerHref1='/signup'
                headerHref2='/signin'
            />) }
            <div className='promo__container'>
                <div className='promo__description'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__info'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href='#aboutProject' className='promo__link'>Узнать больше</a>
                </div>
                <div className='promo__image' />
            </div>
        </div>
    )
}
export default Promo;
