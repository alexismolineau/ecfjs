import React from 'react';

const Button = props => {
    
    //simple composant réutilisable, prend une méthode en props afin de gérer les clics
    return(
    <button className={props.classList} type={props.type} id={props.btnId} aria-expanded={props.ariaExpended} onClick={event => props.method(event)}>
        {props.btnContent}
    </button>)
}

export default Button;