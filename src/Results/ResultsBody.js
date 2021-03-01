import React, { useEffect, useState } from 'react';

import ResultsBodyLine from './ResultsBodyLine';

const ResultsBody = props => {


    const [oldResults, setOldResults] = useState(props.searchResults);

    //si le résultat est différent de l'objet initial, on désactive le composant Loading
    const checkIfLoadingOver = () => {
        if(oldResults !== props.searchResults){
            props.setLoadingState(false);
            setOldResults(props.searchResults);
        }
    }

    //à chaque rendu du résultat, on appelle la méthode pour savoir si l'on continue d'afficher Loading
    useEffect(
        () =>  checkIfLoadingOver()
    )


    return(
        props.searchResults.recordings && props.jquery ?
        <tbody>
            {
                props.searchResults.recordings.map(
                (result, index )=> <ResultsBodyLine result={"blah"} index={"blah"} titre={"blah"} artiste={"blah"} album="blah" key={index} handleDisplayModal={props.handleDisplayModal}/>
                )
            }
        </tbody>
        :
        <tbody>
            {
            props.searchResults.recordings?
                props.searchResults.recordings.length === 1 ?
                <tr>
                    <td colSpan="5">La recherche n'a retourné aucun résultat</td>
                </tr>
                :
                props.searchResults.recordings.map(
                    (result, index) => <ResultsBodyLine result={result} index={index + 1} titre={result.title ? result.title : '-'} artiste={result["artist-credit"] ? result["artist-credit"].map(artist => artist.joinphrase ? artist.name + artist.joinphrase: artist.name) : "-"} album={result.releases ? result.releases[0].title : '-'} key={index} count={props.count} handleDisplayModal={props.handleDisplayModal}/>
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