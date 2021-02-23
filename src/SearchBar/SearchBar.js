import React, {useEffect, useState} from 'react';
import Drowpdown from './Dropdown';
import Input from './Input';
import Button from '../Utils/Button';

const SearchBar = props => {


    const [inputValue, setInputValue] = useState(''); 
    const [filterValue, setFilterValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offsetValue, setOffsetValue] = useState(0);

    const requestApi = props.request()

    const handleSearchButtonClick = event => {
        event.preventDefault();
        setLoading(true);
        requestApi(inputValue, filterValue, offsetValue)
            .then(
                results => props.setSearchResults(results)
            )
            .then(
                setLoading(false)
            )
            .catch(error => setError(error));
    }



    const getInputValue = value => {
        setInputValue(value);
    }

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
            case 'Aucun Filtre':
                formatedValue = 'all'
                break;
            default:
                formatedValue = '';
        }
        setFilterValue(formatedValue);
        console.log(formatedValue);
        }

    


    return(
        <div className="container form-container">
            <form className="row">
                <Input getInputValue={getInputValue}/>
                <Drowpdown getDropdownValue={getDropdownValue}/>
                <Button classList={"btn btn-primary col-2"} btnContent={"Rechercher"} type={'submit'} method={handleSearchButtonClick}/>
            </form>
        </div>
    )

}


export default SearchBar;