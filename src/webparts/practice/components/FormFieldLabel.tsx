import * as React from 'react';

const mcc = 'background:pink;color:black;';


const FormFieldLabel = ({ label }) => {
    console.log('%c label', mcc, label);

    return (
        <span>{label}: </span>
    );
};

export default FormFieldLabel;