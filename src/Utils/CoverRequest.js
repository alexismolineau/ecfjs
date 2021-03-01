//methode d'appel bizarrement codée pour ne pas utiliser de class

const CoverRequest = () => {

    const COVER_API = "http://coverartarchive.org/release-group/";

    const requestCoverById = async id => {
        return await fetch(`${COVER_API}${id}`)
    }

    return requestCoverById;

}

export default CoverRequest;