import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Results from './Results/Results';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
