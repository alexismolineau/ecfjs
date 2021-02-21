import React from 'react';

const ResultsHeader = props => {

    return(
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Titre</th>
                <th scope="col">Artiste</th>
                <th scope="col">Album</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
    )

}

export default ResultsHeader;