import React, { useState } from 'react';
import s from './Header.module.css';
import LogoIcon from '../../icons/LogoIcon.tsx';
import MobileMenu from '../MobileMenu/MobileMenu.tsx';
import useWindowWidth from "../../../hooks/useWindowWidth.ts";
import Nav from "../Nav/Nav.tsx";
import Search from "../Search/Search.tsx";

const Header: React.FC = ({onSearch}) => {
    const { isDesktop} = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggle = () => {
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleClose = () => {
        document.body.style.overflow = 'auto';
        setIsMenuOpen(false);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <button onClick={handleToggle} className={s.button}>
                    <span />
                    <span />
                    <span />
                </button>
                <a href="#" className={s.link}>
                    <LogoIcon />
                </a>
                <Search onSearch={onSearch} />
            </div>
            {isDesktop ? <Nav /> : <MobileMenu isOpen={isMenuOpen} onClose={handleClose} />}
        </div>
    );
};

export default Header;
