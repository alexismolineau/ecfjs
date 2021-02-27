const CoverRequest = () => {

    const COVER_API = "http://coverartarchive.org/release/";

    const requestCoverById = async id => {
        return await fetch(`${COVER_API}${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    return requestCoverById;

}

export default CoverRequest;