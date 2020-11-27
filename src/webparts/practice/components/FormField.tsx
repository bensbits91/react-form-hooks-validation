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
    mode,
    horizontal,
    // handler,
    context
}) => {
    return (
        <Stack horizontal={horizontal}>

            <FormFieldLabel label={label} />

            {mode == 'view' &&
                <FormFieldReadOnly val={val} type={field.TypeAsString} />
            }

            {mode != 'view' &&
                <FormFieldEdit
                    val={val}
                    field={field}
                    mode={mode}
                    // handlerMain={handler}
                    context={context}
                />
            }

        </Stack>
    );
};

export default FormField;