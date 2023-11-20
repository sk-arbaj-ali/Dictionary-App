import React from 'react';
import speakerIcon from '../assets/icons8-speaker-96.png';

const WordPhonetic = ({phonetics, word}) =>{
    return (
        <div className="word-phonetic" style={styles}>
            <p>{word}</p>
            <p>
                <i>{phonetics[1].text}</i>
                <a href={phonetics[1].audio}>
                    <img src={speakerIcon} alt="speaker icon" width="40px" />
                </a>
            </p>
        </div>
    );
};

export default WordPhonetic;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};