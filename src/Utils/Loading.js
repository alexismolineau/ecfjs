import React from 'react';


const Loading = props => {


    return(
        props.isLoading ?
        <div className="position-fixed top-50 start-50 translate-middle">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        :
        null
    )

}

export default Loading;