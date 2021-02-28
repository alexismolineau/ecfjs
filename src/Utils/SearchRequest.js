

const SearchRequest = () => {

    const MUSIC_BRAINZ_API = "https://musicbrainz.org/ws/2/recording/";
    const COVER_ART_ARCHIVE_API = "http://coverartarchive.org/";

    
    //méthode d'appel à l'api de musicbrainz. Prend en paramètre l'input, le filtre et l'offset
    const requestByRecording = async (searchTerm, searchFilter, offset) => {
        if(searchFilter === 'all' ){
            //pas de strict search pour pouvoir chercher par exemple avec l'artiste + le nom du titre
            return await fetch(`${MUSIC_BRAINZ_API}?query=recording:${searchTerm} OR artistname:${searchTerm} OR release:${searchTerm}&limit=100&offset=${offset}&fmt=json`)
            .then(response => response.json())
        }
        return await fetch(`${MUSIC_BRAINZ_API}?query=${searchFilter}:"${searchTerm}"&limit=100&offset=${offset}&fmt=json`)
            .then(response => response.json())
        
        }

    //retourne la méthode d'appel pour pouvoir l'utiliser dans les composants fonctionnels
    return requestByRecording

}

export default SearchRequest