const CoverRequest = () => {

    const COVER_API = "http://coverartarchive.org/release/";

    const requestCoverById = async id => {
        return await fetch(`${COVER_API}${id}`)
    }

    return requestCoverById;

}

export default CoverRequest;