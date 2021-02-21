import React from 'react';

const Input = props => {


    return(
        <input className="col-8" type="search" placeholder="Rechercher" onInput={event => props.getInputValue(event.target.value)} />
    )
}

export default Input;