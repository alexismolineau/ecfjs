import React, {useState} from 'react';
import ResultsBody from './ResultsBody';
import ResultsHeader from './ResultsHeader';
import Modal from './Modal';

const Results = props => {

    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({});

    //méthode pour afficher la modal ou non
    const handleDisplayModal = data => {
        setModalData(data);
        setDisplayModal(!displayModal);
        if(data.id){
            props.setLoadingState(true);
        }
        else {
            props.setLoadingState(false);
        }
    }






    return(
        <div className="container">
            <span className="badge bg-secondary mb-3">Résultats: {props.searchResults.count ? props.searchResults.count : 0}</span>
            <table className="table table-dark table-striped col-12 align-middle">
                <ResultsHeader />
                <ResultsBody handleDisplayModal={handleDisplayModal} searchResults={props.searchResults} setLoadingState={props.setLoadingState} count={props.searchResults.count}/>
            </table>
            <Modal displayModal={displayModal} handleDisplayModal={handleDisplayModal} modalData={modalData} setLoadingState={props.setLoadingState}/>
        </div>
    )
}

export default Results;