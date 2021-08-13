import React from 'react';
import './Header.css';
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useLocation } from 'react-router-dom';
function Header ({linkNum1, linkNum2, headerHref1, headerHref2}){

    const location = useLocation();

    return(
        <div className='header'>
            <div  className='header__logo' />
            <Navigation
                headerHref1={headerHref1}
                headerHref2={headerHref2}
                linkNum1={linkNum1}
                linkNum2={linkNum2}
            />
            {location.pathname === '/' ? '' : <BurgerMenu />}
        </div>
    )
}

export default Header;