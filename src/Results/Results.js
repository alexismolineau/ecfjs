import React, {useState} from 'react';
import ResultsBody from './ResultsBody';
import ResultsHeader from './ResultsHeader';
import Modal from './Modal';


const Results = props => {

    const [displayModal, setDisplayModal] = useState(false);

    const handleDisplayModal = () => {
        setDisplayModal(!displayModal)
    }

    return(
        <div className="container">
            <span className="badge bg-secondary mb-3">Résultats: {props.searchResults.count ? props.searchResults.count : 0}</span>
            <table className="table table-dark table-striped col-12 align-middle">
                <ResultsHeader />
                <ResultsBody handleDisplayModal={handleDisplayModal} searchResults={props.searchResults}/>
            </table>
            <Modal displayModal={displayModal} handleDisplayModal={handleDisplayModal} />
        </div>
    )
}

export default Results;