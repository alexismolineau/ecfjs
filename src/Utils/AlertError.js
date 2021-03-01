import React, { useContext, useEffect } from 'react';
import { ErrorContext } from '../Context/ErrorContext';

const AlertError = props => {

    const errorContext = useContext(ErrorContext);


    return(
            errorContext.error.display ? 
            <div className={`alert alert-${errorContext.error.errorType} position-fixed top-10 start-50 translate-middle`} role="alert">
                {errorContext.error.errorMsg}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => errorContext.updateError(errorContext.error.errorType, errorContext.error.errorMsg, false)}></button>
            </div>
            :
            null
        )
}

export default AlertError;