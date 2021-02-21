import React from 'react';


const DrowpdownList = props => {

    return(
        <li className="dropdown-item" onClick={() => {props.selectFilter(props.listContent); props.handleDropdownClick()}}>
            {props.listContent}
        </li>
    )
}

export default DrowpdownList;
