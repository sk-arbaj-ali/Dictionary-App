import React from 'react';
import searchIcon from '../assets/icons8-search-128.png';

const SearchComponent = () =>{
    return (
        <div className='search-Component'>
            <label>
                <input type="text" name="search" placeholder="Type your text here . . ." />
            </label>
            <img src={searchIcon} alt="Search Icon" />
        </div>
    );
};

export default SearchComponent;