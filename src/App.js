import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Results from './Results/Results';
import { useEffect, useState } from 'react';
import Loading from './Utils/Loading';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [jquery, setJquery] = useState(false);


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

  //blah
  const $ = () => {
    console.log('blah')
      setJquery(true);
    }



  return (
    <div className="App container-fluid" onWheel={event => handleScroll(event)}>
      <Header />
      <Loading isLoading={isLoading}/>
      <SearchBar setSearchResults={setSearchResults} isLoading={isLoading} setLoadingState={setLoadingState} isScrolling={isScrolling} setIsScrolling={setIsScrolling} $={$}/>
      <Results searchResults={searchResults} setLoadingState={setLoadingState} jquery={jquery}/>
    </div>
  );
}

export default App;
