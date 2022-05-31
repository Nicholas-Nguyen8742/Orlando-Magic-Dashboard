import './Header.scss';
import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Orlando Magic Backetball Logo'/>
            <nav className='header__nav'>
                <NavLink  exact={true} activeClassName="header__item-active" className="header__item-inactive" to='/'>Login</NavLink>
            </nav>
        </header>
    );
}

