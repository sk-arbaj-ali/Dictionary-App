import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

const PartsOfSpeech = ({partOfSpeech}) =>{
    return (
        <p>{partOfSpeech}</p>
    );
};


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
            <ul>
                {
                    meaningArray.map(function(value){
                        return <li key={value.partOfSpeech}><Link to={`/${value.partOfSpeech}`}>{value.partOfSpeech}</Link></li>
                    })
                }
            </ul>
            <Switch>
                {
                    meaningArray.map(function(value){
                        return (
                        <Route exact path={`/${value.partOfSpeech}`} key={value.partOfSpeech}>
                            <MeaningCard partsOfSpeech_And_DefinitionObject={value} />
                        </Route>
                        );
                    })
                }
            </Switch>
        </div>
    );
};

export default Meanings;

let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};