import * as React from 'react';
import FormFieldReadOnly from './FormFieldReadOnly';
import FormFieldEdit from './FormFieldEdit';
import FormFieldLabel from './FormFieldLabel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const mcc = 'background:orange;color:black;';

const FormField = ({ label, val, /* type,  */field, horizontal, handler, context }) => {
    console.log('%c context', mcc, context);
    console.log('%c {label, val}', mcc, { label, val/* , type */ });
    return (// TODO: get 'mode' in props, show either edit or read-only
        <Stack horizontal={horizontal}>
            <FormFieldLabel label={label} />
            <FormFieldEdit val={val} /* type={type}  */ field={field} handlerMain={handler} context={context} /> 
            <FormFieldReadOnly val={val} type={field.TypeAsString} />
        </Stack>
    );
};

export default FormField;