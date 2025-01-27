import React, {useState} from 'react';
import s from './Search.module.css';
import SearchIcon from "../../icons/searchIcon.tsx";
import classNames from "classnames";
import {useAppDispatch} from "../../../hooks/redux.ts";
import {setSearchQuery} from "../../../slices/searchSlice.ts";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [query, setQuery] = useState('');
    const dispatch = useAppDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        dispatch(setSearchQuery(newQuery));
    };

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
                <input
                    type="text"
                    className={s.input}
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search posts..."
                />
            </label>
        </div>
    );
};

export default Search;