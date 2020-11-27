import * as React from 'react';
import * as dayjs from 'dayjs';

const mcc = 'background:hotpink;color:black;';


const FormFieldReadOnly = ({ val, type }) => {
    const roVal = type == 'User' ? val.Title
        : type == 'UserMulti' ? val.map(v => v.Title).join(', ')
            : type == 'DateTime' ? dayjs(val).format('MM/DD/YYYY')
                : val;

    return (
        <span>{roVal}</span>
    );
};

export default FormFieldReadOnly;