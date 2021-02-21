import React, {useState, useEffect} from 'react';
import Button from '../Utils/Button';
import DrowpdownList from './DropdownList';

const Drowpdown = props => {

    const [dropdownContent, setDropdownContent] = useState('Aucun filtre');
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const handleDropdownButtonClick = () => {
        setDropdownClicked(!dropdownClicked)
    }

    useEffect(() => {
        props.getDropdownValue(dropdownContent);
    })


    return(
        <div className="dropdown col-2">
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