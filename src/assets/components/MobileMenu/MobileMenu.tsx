import React from 'react';
import classNames from "classnames";
import s from './MobileMenu.module.css';
import LogoIcon from '../../icons/LogoIcon.tsx';
import CloseIcon from '../../icons/CloseIcon.tsx';
import Nav from '../Nav/Nav.tsx';

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={classNames(s.wrapper, { [s.open]: isOpen })}>
                <div className={s.head}>
                    <a className={s.logo}>
                        <LogoIcon />
                    </a>
                    <button className={s.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <Nav />
            </div>
            <div className={s.close} onClick={onClose} />
        </>
    );
};

export default MobileMenu;
