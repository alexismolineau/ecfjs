import './App.css';
import { useEffect, useState } from 'react';
import {ErrorContext} from './Context/ErrorContext';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Results from './Results/Results';
import Loading from './Utils/Loading';
import AlertError from './Utils/AlertError';

const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [error, setError] = useState({    
    errorType: "",
    errorMsg: "",
    display: false});
  const [jquery, setJquery] = useState(false); //blah


  //methode pour savoir si l'on affiche le composant Loading à l'utilisateur
  const setLoadingState = statut => {
    setIsLoading(statut);
  }

  //methode pour continuer à charger la page lors du scroll de l'utilisateur
  const handleScroll = event => {

    //dernier rempart de l'humanité pour éviter les appels d'API infinis
    if(isLoading){
      return;
    }

    if(window.scrollY > document.body.clientHeight * 0.8){
      setIsScrolling(true);
    }
    else {
      setIsScrolling(false);
    }
  }

  const handleLastResult = () => {
    if(searchResults.recordings && searchResults.count === searchResults.recordings.length){
      searchResults.recordings = [...searchResults.recordings].concat([{title: 'Pas plus de résultats... essayez une autre recherche =)'}]);
      setSearchResults(searchResults);
    }
  }

  useEffect(
    () => handleLastResult()
  )

  const updateError = (type, msg, display) => {
    setError({
      errorType: type,
      errorMsg: msg,
      display
    });
  }

  const contextValue = {
    error,
    updateError
  }

  //blah
  const $ = () => {
    alert('blah')
      setJquery(true);
      updateError("danger", "$ERROR : fuis avant que les blahs ne te rattrapent", true);
    }



  return (
    <ErrorContext.Provider value={contextValue}>
      <div className="App container-fluid" onWheel={event => handleScroll(event)}>
        <Header />
        <AlertError/>
        <Loading isLoading={isLoading}/>
        <SearchBar setSearchResults={setSearchResults} isLoading={isLoading} setLoadingState={setLoadingState} isScrolling={isScrolling} setIsScrolling={setIsScrolling} $={$}/>
        <Results searchResults={searchResults} setLoadingState={setLoadingState} jquery={jquery}/>
      </div>
    </ErrorContext.Provider>
  );
}

export default App;
