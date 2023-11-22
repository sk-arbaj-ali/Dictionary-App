import React from 'react';
import WordPhonetic from './WordPhonetic';
import OriginOfWord from './OriginOfWord';
import Meanings from './Meanings';

const WordComponent = ({loading,dataNotFound,meanings,phonetics,word,origin=null}) =>{
    
    if(loading){
        // console.log('Inside if statement');
        return (
            <p>Loading...</p>
        );
    }
    else if(dataNotFound){
        // console.log('Inside else if statement');
        return (
            <p>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
        );
    }
    else{
        // console.log('Inside else statement');
        return (
            <div className="word-component">
                <WordPhonetic phonetics={phonetics} word={word} />
                {origin && <OriginOfWord />}
                <Meanings meaningArray={meanings} />
            </div>
        );
    }
};

export default WordComponent;