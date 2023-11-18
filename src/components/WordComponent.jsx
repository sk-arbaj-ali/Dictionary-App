import React from 'react';
import WordPhonetic from './WordPhonetic';
import OriginOfWord from './OriginOfWord';
import Meanings from './Meanings';

const WordComponent = () =>{
    return (
        <div className="word-component">
            <WordPhonetic />
            <OriginOfWord />
            <Meanings />
        </div>
    );
};

export default WordComponent;