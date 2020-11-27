import * as React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const mcc = 'background-color:navy;color:white;';



const FieldText = ({
    field,
    value,
    mode,
    placeholder = 'Please enter text',
}) => {
    const methods = useFormContext();
    const { control } = methods;

    const readOnly = mode == 'view';

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={value}
            as={
                <TextField
                    id={field.InternalName}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    required={field.Required}
                    multiline={field.TypeAsString == 'Note'}
                    rows={field.TypeAsString == 'Note' ? 10 : null}
                    cols={field.TypeAsString == 'Note' ? 50 : null}
                    // onRenderLabel={this._onRenderLabel}
                    // onChange={(e, t) => this._onChange(field, t)}
                    styles={readOnly ? {
                        subComponentStyles: {
                            label: {
                                root: {
                                    display: 'inline-block',
                                    verticalAlign: 'top'
                                }
                            }
                        },
                        fieldGroup: {
                            border: 'none',
                            display: 'inline-block',
                            verticalAlign: 'top'
                        },
                    } : {
                            subComponentStyles: {
                                label: {
                                    root: {
                                        display: 'inline-block',
                                        verticalAlign: 'middle'
                                    }
                                }
                            },
                            fieldGroup: {
                                display: 'inline-block',
                                verticalAlign: 'middle'
                            }
                        }}
                />
            }
        />
    );
};

export default FieldText;