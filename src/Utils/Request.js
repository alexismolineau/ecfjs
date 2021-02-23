import React from 'react';

const Request = props => {

    const MUSIC_BRAINZ_API = "https://musicbrainz.org/ws/2/recording/";
    const COVER_ART_ARCHIVE_API = "http://coverartarchive.org/";



    const requestByRecording = async (searchTerm, searchFilter, offset) => {
        if(searchFilter === 'all' ){
            console.log(searchFilter);
        }
        return await fetch(`${MUSIC_BRAINZ_API}?query=${searchFilter}:"${searchTerm}"&limit=100&offset=${offset}&fmt=json`)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    return(
        requestByRecording
    )

}

export default Request