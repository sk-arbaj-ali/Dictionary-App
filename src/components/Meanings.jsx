import React from 'react';

const PartsOfSpeech = ({partOfSpeech}) =>{
    return (
        <p>{partOfSpeech}</p>
    );
};

let def = [{def:"definition_one",ex:"example_one"},{def:"definition_two",ex:"example_two"},{def:"definition_three",ex:"example_three"}];

const Definition = ({def}) =>{
    return (
        <div className='meaning-card-definition'>
            <p>{def}</p>
        </div>
    );
};

const DefinitionList = ({definitionList}) =>{
    return (
        <div className='meaning-card-definition-list'>
            {definitionList.map((value) => <Definition def={value.definition} key={value.definition} /> )}
        </div>
    );
};

const MeaningCard = ({partsOfSpeech_And_DefinitionObject}) =>{
    return (
        <div className="meaning-card" style={{...styles,marginLeft:"2px",marginRight:"2px"}}>
            <PartsOfSpeech partOfSpeech={partsOfSpeech_And_DefinitionObject.partOfSpeech}/>
            <DefinitionList definitionList={partsOfSpeech_And_DefinitionObject.definitions} />
        </div>
    )
}

const Meanings = ({meaningArray=[]}) =>{
    return (
        <div className="Meanings" style={styles}>
            {
                meaningArray.map(function(value){
                    return <MeaningCard partsOfSpeech_And_DefinitionObject={value} key={value.partOfSpeech} />;
                })
            }
        </div>
    );
};

export default Meanings;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};