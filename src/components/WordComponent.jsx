import React from 'react';
import WordPhonetic from './WordPhonetic';
import OriginOfWord from './OriginOfWord';
import Meanings from './Meanings';

const WordComponent = ({meanings,phonetics,word,origin=null}) =>{
    return (
        <div className="word-component">
            <WordPhonetic phonetics={phonetics} word={word} />
            {origin && <OriginOfWord />}
            <Meanings meaningArray={meanings} />
        </div>
    );
};

export default WordComponent;