import React from 'react';
import speakerIcon from '../assets/icons8-speaker-96.png';

const WordPhonetic = () =>{
    return (
        <div className="word-phonetic" style={styles}>
            <p>Word</p>
            <p>
                <i>phonetic</i>
                <img src={speakerIcon} alt="speaker icon" width="40px" />
            </p>
        </div>
    );
};

export default WordPhonetic;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};