import React from 'react';
import searchIcon from '../assets/icons8-search-128.png';

const SearchComponent = ({handleDataFetching}) =>{

    const [inputWord, setInputWord] = React.useState("");
    const handleInputWordChange = (event) =>{
        setInputWord(event.target.value);
    };

    return (
        <div className='search-Component'>
            <label>
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Type your text here . . ."
                    value={inputWord}
                    onChange={handleInputWordChange}
                />
            </label>
            <img src={searchIcon} alt="Search Icon" width="40px" onClick={()=>{handleDataFetching(inputWord)}} />
        </div>
    );
};

export default SearchComponent;