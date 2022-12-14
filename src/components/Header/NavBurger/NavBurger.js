/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import headerLogo from '../images/header-logo.svg';

function NavBurger({ isOpen, onClose }) {
  isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';

  return (
    <section className={`navBurger ${isOpen ? 'navBurger_opened' : ''}`}>
      <div className="navBurger__container">
        <img className="navBurger__logo" src={headerLogo} alt="Лого" />
        <button className="navBurger__redirect-button" onClick={onClose}>Кто такой наставник?</button>
        <button className="navBurger__redirect-button" onClick={onClose}>Кто такой ревьюер?</button>
        <button className="navBurger__redirect-button" onClick={onClose}>Смотреть предложения о работе</button>
        <button className="navBurger__redirect-button" onClick={onClose}>Отзывы</button>
      </div>
    </section>
  );
}

export default NavBurger;
