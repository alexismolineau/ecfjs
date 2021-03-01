import React from 'react';
import Button from '../Utils/Button';

const ResultsBodyLine = props => {

    //methode de gestion des clics pour afficher la Modal
    const showModal = event => {
        event.preventDefault();
        props.handleDisplayModal(props.result);
    }

    const btnIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
        </svg>

    return(
        props.count !== props.index -1 ?
            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.titre}</td>
                <td>{props.artiste}</td>
                <td>{props.album}</td>
                <td><Button btnContent={btnIcon} classList={"btn btn-light"} type="button" method={showModal}/></td>
            </tr>
        :
            <tr>
                <th scope="row" colSpan="5">{props.titre}</th>
            </tr>

    )

}

export default ResultsBodyLine;