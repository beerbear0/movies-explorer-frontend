import Navigation from "./Navigation";
import {headerHref1, headerHref2} from "../utils/const";

function Header (){
    return(
        <div className='header'>
            <div  className='header__logo'>
                <div className='header__img' />
            </div>
            <Navigation
                headerHref1={headerHref1}
                headerHref2={headerHref2}
                linkNum1='Регистрация'
                linkNum2='Вход'
            />
        </div>
    )
}

export default Header;