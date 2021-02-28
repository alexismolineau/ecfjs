import React, {useEffect, useState} from 'react';
import Drowpdown from './Dropdown';
import Input from './Input';
import Button from '../Utils/Button';
import SearchRequest from '../Utils/SearchRequest';

const SearchBar = props => {


    const [inputValue, setInputValue] = useState(''); 
    const [filterValue, setFilterValue] = useState('');
    const [error, setError] = useState(null);
    const [offsetValue, setOffsetValue] = useState(0);
    const [oldRequest, setOldRequest] = useState([]);

    //instanciation de Request
    const requestApi = SearchRequest();

    //fonction d'appel à la méthode parente pour mettre à jour le statut en chargement
    const setLoadingStatut = statut => {props.setLoadingState(statut)};


    //on enclenche l'appel à musicbrainz au clic du bouton rechercher
    const handleSearchButtonClick = event => {
        event.preventDefault();
        setLoadingStatut(true);
        requestApi(inputValue, filterValue, 0)
            .then(
                results => {
                    props.setSearchResults(results);
                    setOldRequest(results);
                }
            )
            .then(
                () => {
                    setOffsetValue(0);
                }
            )
            .catch(error => setError(error))
    }


    //méthode de gestion des appels à l'API en fonction du scroll de l'utilisateur
    const handleScroll = () => {


        if(!props.isScrolling || props.isLoading || oldRequest.count < offsetValue + 100){
            return;
        }
        
        //avant dernier rempart de l'humanité pour éviter les appels d'api infinis
        setLoadingStatut(true);
        props.setIsScrolling(false);

        requestApi(inputValue, filterValue, offsetValue + 100)
            .then(
                results => {
                    results.recordings = [...oldRequest.recordings].concat(results.recordings);
                    props.setSearchResults(results);
                    setOldRequest(results);
                }
                )
            .then(
                () => setOffsetValue(offsetValue + 100)
            )
            .catch(error => setError(error))
                
    }



    useEffect(
        () => {handleScroll()}, [props.isScrolling]
    )



    //fonction de controle des inputs de l'utilisateur
    const getInputValue = value => {
        setInputValue(value);
        if(value.toLowerCase() === 'jquery'){
            props.$();
        }
    }



    //mise à jour des paramètres d'appel en fonction du filtre sélectionné
    const getDropdownValue = value => {
        let formatedValue = '';
        switch(value){
            case 'Artiste':
                formatedValue = 'artistname';
                break;
            case 'Titre':
                formatedValue = 'recording';
                break;
            case 'Album':
                formatedValue = 'release';
                break;
            case 'Aucun filtre':
                formatedValue = 'all'
                break;
            default:
                formatedValue = '';
        }
        setFilterValue(formatedValue);
    }

    


    return(
        <div className="container form-container">
            <form className="row flex-column flex-lg-row">
                <Input getInputValue={getInputValue}/>
                <div className="col-lg-4 d-inline-flex">
                <Drowpdown getDropdownValue={getDropdownValue}/>
                <Button classList={"btn btn-primary col-6"} btnContent={"Rechercher"} type={'submit'} method={handleSearchButtonClick}
                />
                </div>
            </form>
        </div>
    )

}


export default SearchBar;