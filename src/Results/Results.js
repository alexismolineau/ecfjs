import React, {useState} from 'react';
import ResultsBody from './ResultsBody';
import ResultsHeader from './ResultsHeader';
import Modal from './Modal';
import LookupRequest from '../Utils/LookupRequest';

const Results = props => {

    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({});

    //méthode pour afficher la modal ou non
    const handleDisplayModal = data => {
        setModalData(data);

        setDisplayModal(!displayModal);
        console.log(data);

    }



    return(
        <div className="container">
            <span className="badge bg-secondary mb-3">Résultats: {props.searchResults.count ? props.searchResults.count : 0}</span>
            <table className="table table-dark table-striped col-12 align-middle">
                <ResultsHeader />
                <ResultsBody handleDisplayModal={handleDisplayModal} searchResults={props.searchResults} setLoadingState={props.setLoadingState} count={props.searchResults.count}/>
            </table>
            <Modal displayModal={displayModal} handleDisplayModal={handleDisplayModal} modalData={modalData}/>
        </div>
    )
}

export default Results;