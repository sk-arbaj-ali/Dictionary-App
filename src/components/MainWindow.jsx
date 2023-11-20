import React from 'react';
import SearchComponent from './SearchComponent';
import WordComponent from './WordComponent';

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const MainWindow = () =>{

    const [fetchedWordData, setFetchedWordData] = React.useState(null);
    const handleDataFetching = (word) =>{
        fetch(`${url}${word}`)
            .then(response => response.json())
            .then(jsonData => {setFetchedWordData(jsonData);console.log(jsonData);})
            .catch(e => console.log(e));
    }

    return (
        <div className="main-window">
            <SearchComponent handleDataFetching={handleDataFetching} />
            {
                fetchedWordData 
                && 
                <WordComponent 
                    meanings={fetchedWordData[0].meanings}
                    phonetics={fetchedWordData[0].phonetics}
                    word={fetchedWordData[0].word}
                />}
        </div>
    );
};

export default MainWindow;