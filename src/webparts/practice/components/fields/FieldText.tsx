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
            rules={{ required: true }} // working, but need to show error
            // as={ // change to render
            render={({ onChange, /* onBlur,  */value, name, ref }) => (
                <TextField
                    id={name}
                    componentRef={ref}
                    placeholder={placeholder}
                    defaultValue={value}
                    readOnly={readOnly}
                    required={field.Required}
                    multiline={field.TypeAsString == 'Note'}
                    rows={field.TypeAsString == 'Note' ? 10 : null}
                    cols={field.TypeAsString == 'Note' ? 50 : null}
                    onChange={onChange}
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
            )}
        />
    );
};

export default FieldText;