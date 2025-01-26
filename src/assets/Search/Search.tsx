import React, {useState} from 'react';
import s from './Search.module.css';
import SearchIcon from "../icons/searchIcon.tsx";
import classNames from "classnames";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={s.wrapper}>
            <button
                onClick={() => setIsOpen(prevState => !prevState)}
                className={s.button}
                aria-label="Search"
            >
                <SearchIcon />
            </button>
            <label className={classNames(s.label, {[s.open] : isOpen})}>
                <input type="text" className={s.input}/>
            </label>
        </div>
    );
};

export default Search;