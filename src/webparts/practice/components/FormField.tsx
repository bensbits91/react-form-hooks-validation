import * as React from 'react';

const mcc = 'background:orange;color:black;';

const ReadOnly = ({label, val}) => {
    return (
        <div>
            <span>{label}: </span>
            <span>{JSON.stringify(val)}</span>
        </div>
    );
};

const FormField = ({ label, val, type }) => {
    console.log('%c {label, val, type}', mcc, { label, val, type });
    return (
        <ReadOnly label={label} val={val} />
    );
};

export default FormField;