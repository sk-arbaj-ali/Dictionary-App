import React from 'react';
import speakerIcon from '../assets/icons8-speaker-96.png';


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
        <p>
            <i>{text}</i>
            <a href={audio}>
                <img src={speakerIcon} alt="speaker icon" width="40px" />
            </a>
        </p>
    )
};

const WordPhonetic = ({phonetics, word}) =>{

    return (
        <div className="word-phonetic" style={styles}>
            <p>{word}</p>
            <FindPhonetic phonetics={phonetics} />
        </div>
    );
};

export default WordPhonetic;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};