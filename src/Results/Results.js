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
            <table className="table table-dark table-striped col-12 align-middle">
                <ResultsHeader />
                <ResultsBody handleDisplayModal={handleDisplayModal}/>
            </table>
            <Modal displayModal={displayModal} handleDisplayModal={handleDisplayModal} />
        </div>
    )
}

export default Results;