import React from 'react';

import ResultsBodyLine from './ResultsBodyLine';

const ResultsBody = props => {


    console.log(props.searchResults)


    return(
        <tbody>
            {
            props.searchResults.recordings?
                props.searchResults.recordings.length === 0 ?
                <tr>
                    <td colSpan="5">La recherche n'a retourné aucun résultat</td>
                </tr>
                :
                props.searchResults.recordings.map(
                    (result, index) => <ResultsBodyLine index={index + 1} titre={result.title ? result.title : '-'} artiste={result["artist-credit"] ? result["artist-credit"][0].artist.name : "-"} album={result.releases ? result.releases[0].title : '-'} key={index} handleDisplayModal={props.handleDisplayModal}/>
                )
            : 
            <tr>
                <td colSpan="5">Commencez par effectuer une recherche</td>
            </tr>
            }
        </tbody>

    )

}

export default ResultsBody;