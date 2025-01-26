import React from 'react';
import s from './NavItem.module.css';

type SubmenuItem = {
    title: string;
};

type MenuItem = {
    title: string;
    submenu?: SubmenuItem[];
};

type NavItemProps = {
    item: MenuItem;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => (
    <li className={s.wrapper}>
        <button className={s.button}>{item.title}</button>
        {item.submenu && (
            <ol className={s.list}>
                {item.submenu.map((subItem, index) => (
                    <li key={index} className={s.item}>
                        <a href="#" className={s.link}>
                            {subItem.title}
                        </a>
                    </li>
                ))}
            </ol>
        )}
    </li>
);

export default NavItem;
