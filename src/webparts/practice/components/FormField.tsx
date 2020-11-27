import * as React from 'react';
import FormFieldReadOnly from './FormFieldReadOnly';
import FormFieldEdit from './FormFieldEdit';
import FormFieldLabel from './FormFieldLabel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const mcc = 'background:orange;color:black;';

const FormField = ({
    label,
    val,
    field,
    horizontal,
    // handler,
    context
}) => {
    return (// TODO: get 'mode' in props, show either edit or read-only
        <Stack horizontal={horizontal}>
            <FormFieldLabel label={label} />
            <FormFieldEdit
                val={val}
                field={field}
                // handlerMain={handler}
                context={context}
            />
            <FormFieldReadOnly val={val} type={field.TypeAsString} />
        </Stack>
    );
};

export default FormField;