import React from 'react';
import s from './Nav.module.css';
import NavItem from "./components/NavItem/NavItem.tsx";

type SubmenuItem = {
    title: string;
};

type MenuItem = {
    title: string;
    submenu?: SubmenuItem[];
};

type NavProps = {
    menu?: MenuItem[];
};

const defaultMenu: MenuItem[] = [
    {
        title: "Demos",
        submenu: [
            { title: "Post Header" },
            { title: "Post Layout" },
            { title: "Share Buttons" },
            { title: "Gallery Post" },
        ],
    },
    {
        title: "Post",
        submenu: [
            { title: "Post Header" },
            { title: "Post Layout" },
            { title: "Share Buttons" },
            { title: "Gallery Post" },
        ],
    },
    {
        title: "Features",
        submenu: [
            { title: "Post Header" },
            { title: "Post Layout" },
            { title: "Share Buttons" },
            { title: "Gallery Post" },
        ],
    },
    {
        title: "Categories",
        submenu: [
            { title: "Post Header" },
            { title: "Post Layout" },
            { title: "Share Buttons" },
            { title: "Gallery Post" },
        ],
    },
    {
        title: "Shop",
        submenu: [
            { title: "Post Header" },
            { title: "Post Layout" },
            { title: "Share Buttons" },
            { title: "Gallery Post" },
        ],
    },
    {
        title: "Buy Now",
    },
];

const Nav: React.FC<NavProps> = ({ menu = defaultMenu }) => (
    <nav className={s.wrapper}>
        <ul className={s.list}>
            {menu.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
        </ul>
    </nav>
);

export default Nav;
