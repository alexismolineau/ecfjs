import React from 'react';


const Cover = props => {

    return(
        <img src={props.thumbnails.small} alt={props.id} className="col-5 m-2" />
    )

}

export default Cover;