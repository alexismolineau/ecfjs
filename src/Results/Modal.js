import React, { useEffect, useState } from 'react';

import Button from '../Utils/Button';
import LookupRequest from '../Utils/LookupRequest';

const Modal = props => {

    const [genresAndRatings, setGenresAndRatings] = useState({});

    const requestApi = LookupRequest();

    const updateModal = () => {
        if(props.modalData.releases && genresAndRatings.id !== props.modalData.releases[0]['release-group'].id){
            requestApi(props.modalData.releases[0]['release-group'].id)
                .then(
                    results => setGenresAndRatings(results)
                )
        }
    }

    useEffect(
        () => updateModal()
    )

    return(

        
        
        props.displayModal ?
        <div className="modal fade show ">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.modalData['artist-credit'][0].name} - {props.modalData.title}</h5>
                        <Button type={"button"} classList={"btn-close"} ariaLabel={"Close"} method={props.handleDisplayModal}/>
                    </div>
                    <div className="modal-body">
                        <div className="informations container">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Titre
                                        </th>
                                        <td>
                                            {props.modalData.title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            {props.modalData['artist-credit'].length < 2 ? 'Artiste' : 'Artistes'}
                                        </th>
                                        <td>
                                        {props.modalData['artist-credit'].map(
                                            artist => artist.joinphrase ? artist.name + artist.joinphrase : artist.name
                                        )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            {props.modalData.releases.length < 2 ? 'Album' : 'Albums'}
                                        </th>
                                        <td>
                                        {
                                        props.modalData.releases.map(
                                            (album, index ) => props.modalData.releases.length === index + 1 ? album.title : album.title + " - "
                                        )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Durée
                                        </th>
                                        <td>
                                            //TODO gérer les cas de NaN
                                        {parseInt(props.modalData.length / 60000) + 'm' + parseInt((props.modalData.length % 60000)/1000) + 's'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Note
                                        </th>
                                        <td>
                                            {genresAndRatings.rating.value}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type={"button"} classList={"btn btn-primary"} btnContent={"Fermer"} method={props.handleDisplayModal}/>
                    </div>
                </div>
            </div>
        </div>
        :
        null
        
    )
}

export default Modal