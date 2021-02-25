import React from 'react';

const Input = props => {


    return(
        <input className="col-lg-8 mb-2 mb-lg-0" type="search" placeholder="Rechercher" onInput={event => props.getInputValue(event.target.value)} />
    )
}

export default Input;