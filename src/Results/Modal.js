import React, { useContext, useEffect, useState } from 'react';

import Button from '../Utils/Button';
import Cover from './Cover';
import { ErrorContext } from '../Context/ErrorContext';

import LookupRequest from '../Utils/LookupRequest';
import CoverRequest from '../Utils/CoverRequest';

const Modal = props => {

    const [genresAndRatings, setGenresAndRatings] = useState({});
    const [cover, setCover] = useState([]);

    const errorContext = useContext(ErrorContext);

    const requestMusicBrainz = LookupRequest();
    const requestCover = CoverRequest();


    //appels d'api à l'ouverture de la modal
    const updateModal = () => {

        if(!props.displayModal){
            setCover([]);
        }

        if(props.modalData.id && genresAndRatings.id !== props.modalData.id){
            requestMusicBrainz(props.modalData.id)
                .then(response => response.json())
                .then(results => setGenresAndRatings(results))
                .catch(error => errorContext.updateError('danger', error, true));
        }
        else if(props.displayModal && !props.modalData.id)
        {
            setGenresAndRatings({});
        }

        if(props.modalData.releases){   
            props.modalData.releases.map(
                (release, index) => 
                    index+1 === props.modalData.releases.length ? 
                    setTimeout(
                    () => requestCover(release['release-group'].id)
                        .then(response => response.json())
                        .then(results => {cover[index] = results})
                        .then(() => setCover([...cover]))
                        .catch(error => errorContext.updateError('info', "image d'album non trouvée", true))
                        .finally(() => props.setLoadingState(false)), 
                    500 * index)
                    :
                    setTimeout(
                    () => requestCover(release['release-group'].id)
                    .then(response => response.json())
                    .then(results => {cover[index] = results})
                    .then(() => setCover([...cover])),
                    500 * index)
            )
        }
        else {
            props.setLoadingState(false);
        }

    }

    useEffect(
        () => {updateModal()}, [props.displayModal]
    );



    //vu la taille du composant j'aurai peut-être dû fragmenter 
    return(
        props.jquery && props.displayModal ?
        <div className="modal fade show ">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Blah</h2>
                        <Button type={"button"} classList={"btn-close"} ariaLabel={"Close"} method={props.handleDisplayModal}/>
                    </div>
                </div>
            </div>
        </div>
        :
        props.displayModal ?
        <div className="modal fade show ">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title h4">{props.modalData['artist-credit'] ? props.modalData['artist-credit'][0].name : null} - {props.modalData.title ? props.modalData.title : null}</h2>
                        <Button type={"button"} classList={"btn-close"} ariaLabel={"Close"} method={props.handleDisplayModal}/>
                    </div>
                    <div className="modal-body">
                        <div className="informations container">
                            <table className="table table-striped align-middle">
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
                                            {props.modalData['artist-credit'] ? props.modalData['artist-credit'].length < 2 ? 'Artiste' : 'Artistes' : "Artiste"}
                                        </th>
                                        <td>
                                        {props.modalData['artist-credit'] ?
                                            props.modalData['artist-credit'].map(
                                                artist => artist.joinphrase ? artist.name + artist.joinphrase : artist.name
                                            )
                                            :
                                            "-"
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            {props.modalData.releases ? props.modalData.releases.length < 2 ? 'Album' : 'Albums' : 'Album'}
                                        </th>
                                        <td>
                                        {
                                        props.modalData.releases ?
                                            props.modalData.releases.map(
                                                (album, index ) => props.modalData.releases.length === index + 1 ? album.title : album.title + " - "
                                            )
                                            :
                                            "-"    
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Durée
                                        </th>
                                        <td>
                                        {props.modalData.length ? parseInt(props.modalData.length / 60000) + 'm' + parseInt((props.modalData.length % 60000)/1000) + 's' : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Note
                                        </th>
                                        <td>
                                            {genresAndRatings.rating && genresAndRatings.rating.value ? genresAndRatings.rating.value + "/5 (" + genresAndRatings.rating['votes-count'] + ")"   : "pas de note"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Genre
                                        </th>
                                        <td>
                                            {genresAndRatings.genres && genresAndRatings.genres.length > 0 ? 
                                                genresAndRatings.genres.map(
                                                    (genre, index ) => genresAndRatings.genres.length === index + 1 ? genre.name : genre.name + " - "
                                                )
                                            :
                                            "-"
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="container">
                                <h3 className="h5">Images d'albums</h3>
                                {
                                    cover[0] && Object.keys(cover[0]).length > 0 ?
                                        cover.map(
                                            (images) => images && images.images ? images.images.map(
                                                (image, index) => <Cover thumbnails={image.thumbnails} id={image.id} key={index} />
                                            )
                                            :
                                            null
                                        )
                                    :
                                        <div>Pas d'image d'album</div>
                                }

                            </div>
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