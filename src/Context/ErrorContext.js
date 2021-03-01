import React from 'react';

export const error = {
    errorType: "",
    errorMsg: "",
    display: false
}


export const ErrorContext = React.createContext({
    error,
    updateError: () => {},
});