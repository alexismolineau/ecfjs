import React, {useState, useEffect} from 'react';
import Button from '../Utils/Button';
import DrowpdownList from './DropdownList';

const Drowpdown = props => {

    const [dropdownContent, setDropdownContent] = useState('Aucun filtre');
    const [dropdownClicked, setDropdownClicked] = useState(false);


    //méthode de gestion des clics sur le dropdown menu
    const handleDropdownButtonClick = () => {
        setDropdownClicked(!dropdownClicked)
    }

    //à chaque rendu, on renvoie la valeur sélectionnée à Searchbar
    useEffect(() => {
        props.getDropdownValue(dropdownContent);
    })


    return(
        <div className="dropdown col-6">
            <Button classList={"btn btn-secondary dropdown-toggle"} type={"button"} ariaExpended={false} btnId={"#dropdownChoices"} btnContent={dropdownContent} method={handleDropdownButtonClick}/>

            {dropdownClicked ? 
            <ul className="dropdown-menu" aria-labelledby="dropdownChoices">
                < DrowpdownList listContent={"Aucun filtre"} selectFilter={setDropdownContent} handleDropdownClick={handleDropdownButtonClick}/>
                < DrowpdownList listContent={"Artiste"} selectFilter={setDropdownContent} handleDropdownClick={handleDropdownButtonClick}/>
                < DrowpdownList listContent={"Titre"} selectFilter={setDropdownContent} handleDropdownClick={handleDropdownButtonClick}/>
                < DrowpdownList listContent={"Album"} selectFilter={setDropdownContent} handleDropdownClick={handleDropdownButtonClick}/>
            </ul>
            :
            null
            }
        </div>
    )
}

export default Drowpdown;