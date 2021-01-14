import * as React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const FieldText = ({
    field,
    fieldOverrides,
    value,
    mode,
    placeholder = 'Please enter text',
}) => {
    const methods = useFormContext(),

        { control } = methods,

        readOnly = mode == 'view',

        fieldType = fieldOverrides.TypeAsString || field.TypeAsString,

        fieldRequired = fieldOverrides.Required || field.Required,

        fieldRules = (() => {
            switch (fieldType) {
                case 'Email':
                    return ({ // need to allow empty strings
                        pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, // https://regexlib.com/Search.aspx?k=email
                    });
                case 'Phone':
                    return ({ // need to allow empty strings
                        pattern: /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/, // https://regexlib.com/Search.aspx?k=phone
                    });
                case 'Zip':
                    return ({ // need to allow empty strings
                        pattern: /^(\d{5}|)$|^(\d{5}-\d{4}|\/\/|)$/, // https://regexlib.com/Search.aspx?k=zip
                    });
                default:
                    return ({});
            }
        })();

    if (fieldRequired) {
        fieldRules['Required'] = true;
    }

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={value}
            rules={fieldRules}
            render={({ onChange, value, name, ref }) => (
                <TextField
                    id={name}
                    componentRef={ref}
                    placeholder={placeholder}
                    defaultValue={value}
                    readOnly={readOnly}
                    required={fieldRequired}
                    multiline={fieldType == 'Note'}
                    rows={fieldType == 'Note' ? 10 : null}
                    cols={fieldType == 'Note' ? 50 : null}
                    onChange={onChange}
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