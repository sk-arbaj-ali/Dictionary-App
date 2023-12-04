import React from 'react';
import speakerIcon from '../assets/icons8-speaker-96.png';
import '../styles/WordPhonetic.css';


const FindPhonetic = ({phonetics}) =>{
    let text = "";
    let audio = "";
    for(let obj of phonetics){
        if( ("text" in obj) && ("audio" in obj)){
            text = obj.text;
            audio = obj.text;
            break;
        }
    }
    return (
        <p className='find-phonetic'>
            <i>{text}</i>
            <a href={audio}>
                <img src={speakerIcon} alt="speaker icon" width="40px" />
            </a>
        </p>
    )
};

const WordPhonetic = ({phonetics, word}) =>{

    return (
        <div className="word-phonetic">
            <p>{word}</p>
            <FindPhonetic phonetics={phonetics} />
        </div>
    );
};

export default WordPhonetic;