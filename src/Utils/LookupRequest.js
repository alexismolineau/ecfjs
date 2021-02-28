
const LookupRequest = () => {

    const MUSIC_BRAINZ_API = "https://musicbrainz.org/ws/2/recording/";

    const requestByReleaseGroupId = async id => {
        return await fetch(`${MUSIC_BRAINZ_API}${id}?inc=genres+ratings&fmt=json`)
    }

    return requestByReleaseGroupId;

}

export default LookupRequest;