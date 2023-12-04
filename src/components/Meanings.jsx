import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import '../styles/Meanings.css';

const PartsOfSpeech = ({partOfSpeech}) =>{
    return (
        <p className='partsOfSpeech'>{partOfSpeech}</p>
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
        <div className="meaning-card">
            <PartsOfSpeech partOfSpeech={partsOfSpeech_And_DefinitionObject.partOfSpeech}/>
            <DefinitionList definitionList={partsOfSpeech_And_DefinitionObject.definitions} />
        </div>
    )
}

const Meanings = ({meaningArray=[]}) =>{
    
    return (
        <div className="Meanings">
            <ul>
                {
                    meaningArray.map(function(value,index){
                        return (
                            <li key={`${value.partOfSpeech}${index}`}>
                                <Link to={`/${value.partOfSpeech}${index}`}>
                                    {value.partOfSpeech}
                                </Link>
                            </li>
                        )
                    })
                }
                {
                    <Redirect to={`/${meaningArray[0].partOfSpeech}0`} />
                }
            </ul>
            <Switch>
                {
                    meaningArray.map(function(value,index){
                        return (
                        <Route exact path={`/${value.partOfSpeech}${index}`} key={`${value.partOfSpeech}${index}`}>
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

//let styles = {border:"2px solid black",marginTop:"2px",marginBottom:"2px",};