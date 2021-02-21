import React from 'react';

import ResultsBodyLine from './ResultsBodyLine';

const ResultsBody = props => {

    const fakeResults = [
        {
        "firstname": "Claudina",
        "lastname": "Ioab",
        "city": "La Serena"
        },
        {
            "firstname": "Claudina",
            "lastname": "Ioab",
            "city": "La Serena"
        },
        {
            "firstname": "Roz",
            "lastname": "Sherrie",
            "city": "Mendoza"
        },
        {
            "firstname": "Emma",
            "lastname": "Ardra",
            "city": "Liverpool"
        }
    ]

    return(
        <tbody>
            {fakeResults.map(
                (result, index) => <ResultsBodyLine index={index + 1} titre={result.firstname} artiste={result.lastname} album={result.city} key={index} handleDisplayModal={props.handleDisplayModal}/>
            )} 
        </tbody>
    )

}

export default ResultsBody;