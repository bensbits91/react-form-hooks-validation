import * as React from 'react';
import FormFieldReadOnly from './FormFieldReadOnly';
import FormFieldEdit from './FormFieldEdit';
import FormFieldLabel from './FormFieldLabel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const mcc = 'background:orange;color:black;';

const FormField = ({ label, val, type, field, horizontal, handler }) => {
    console.log('%c {label, val, type}', mcc, { label, val, type });
    return (
        <Stack horizontal={horizontal}>
            <FormFieldLabel label={label} />
            <FormFieldEdit val={val} type={type} field={field} handlerMain={handler} />
            {/* <FormFieldReadOnly val={val} type={type} /> */}
        </Stack>
    );
};

export default FormField;