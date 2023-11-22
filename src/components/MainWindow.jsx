import React from 'react';
import SearchComponent from './SearchComponent';
import WordComponent from './WordComponent';

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const MainWindow = () =>{

    const [fetchedWordData, setFetchedWordData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [dataNotFound, setDataNotFound] = React.useState(false);
    const handleDataFetching = (word) =>{
        setLoading(true);
        fetch(`${url}${word}`)
            .then(response => {
                if(response.status != 200){
                    return null;
                } 
                return response.json();
            })
            .then(jsonData => {
                if(jsonData){
                    setFetchedWordData(jsonData);
                    setLoading(false);
                    setDataNotFound(false);
                    console.log(jsonData);
                }
                else{
                    setFetchedWordData([{meanings:null,phonetics:null,word:null}]);
                    setLoading(false);
                    setDataNotFound(true);
                    console.log(jsonData);
                }
                
            })
            .catch(e => console.log(e));
    }

    return (
        <div className="main-window">
            <SearchComponent handleDataFetching={handleDataFetching} />
            {
                fetchedWordData 
                && 
                <WordComponent 
                    loading={loading}
                    dataNotFound={dataNotFound}
                    meanings={fetchedWordData[0].meanings}
                    phonetics={fetchedWordData[0].phonetics}
                    word={fetchedWordData[0].word}
                />
            }
        </div>
    );
};

export default MainWindow;