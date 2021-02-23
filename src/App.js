import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Results from './Results/Results';
import Request from './Utils/Request';
import { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState({});
  const [firstRequestMade, setFirstRequestMade] = useState(false);


  return (
    <div className="App container-fluid">
      <Header />
      <SearchBar  request={Request} setSearchResults={setSearchResults}/>
      <Results searchResults={searchResults}/>
    </div>
  );
}

export default App;
