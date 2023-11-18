import React from 'react';
import SearchComponent from './SearchComponent';
import WordComponent from './WordComponent';

const MainWindow = () =>{
    return (
        <div className="main-window">
            <SearchComponent />
            <WordComponent />
        </div>
    );
};

export default MainWindow;