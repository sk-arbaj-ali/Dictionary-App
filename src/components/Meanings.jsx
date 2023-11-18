import React from 'react';

const PartsOfSpeech = () =>{
    return (
        <p>PartsOfSpeech</p>
    );
};

const Definition = () =>{
    return (
        <div>
            <p>definition</p>
            <p>example</p>
        </div>
    );
};

const DefinitionList = () =>{
    return (
        <Definition />
    );
};

const MeaningCard = () =>{
    return (
        <div className="meaning-card">
            <PartsOfSpeech />
            <DefinitionList />
        </div>
    )
}

const Meanings = () =>{
    return (
        <div className="Meanings" style={styles}>
            <MeaningCard />
        </div>
    );
};

export default Meanings;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};