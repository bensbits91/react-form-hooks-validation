import * as React from 'react';
import FormFieldReadOnly from './FormFieldReadOnly';
import FormFieldEdit from './FormFieldEdit';
import FormFieldLabel from './FormFieldLabel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const FormField = ({
    label,
    val,
    field,
    fieldOverrides,
    mode,
    horizontal,
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
                    fieldOverrides={fieldOverrides}
                    mode={mode}
                    context={context}
                />
            }

        </Stack>
    );
};

export default FormField;