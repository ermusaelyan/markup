import React from 'react';
import s from './Header.module.css';
import LogoIcon from "../../icons/LogoIcon.tsx";
import SearchIcon from "../../icons/searchIcon.tsx";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <button className={s.button}>
                <span />
                <span />
                <span />
            </button>
            <a href="#" className={s.link}>
                <LogoIcon />
            </a>
            <div className={s.search}>
                <button className={s.search__button}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default Header;