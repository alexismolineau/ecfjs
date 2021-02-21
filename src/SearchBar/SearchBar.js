import React, {useEffect, useState} from 'react';
import Drowpdown from './Dropdown';
import Input from './Input';
import Button from '../Utils/Button';

const SearchBar = props => {


    const [inputValue, setInputValue] = useState(''); 
    const [filterValue, setFilterValue] = useState('');

    const handleSearchButtonClick = event => {
        event.preventDefault();
        console.log("submit");
    }

    const getInputValue = value => {
        setInputValue(value);
    }

    const getDropdownValue = value => {
        setFilterValue(value);
        console.log(value);
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