import * as React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import FormField from './FormField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import * as errorMsgs from './errorMsgs';

const mcc = 'background:black;color:orange;',

    fieldsToShow: any[] = [
        { InternalName: 'Title' },
        { InternalName: 'Status' },
        { InternalName: 'DueDate' },
        { InternalName: 'AssignedTo' },
        {
            InternalName: 'TextField1',
            Title: 'Text Field One'
        },
        {
            InternalName: 'ChoiceAsRadio1',
            Title: 'Radio Buttons One'
        },
        {
            InternalName: 'Currency1',
            Title: 'Currency One'
        },
        {
            InternalName: 'Email1',
            Title: 'Email One',
            TypeAsString: 'Email'
        },
        {
            InternalName: 'Percentage1',
            Title: 'Percentage One'
        },
        {
            InternalName: 'PhoneNumber1',
            Title: 'Phone Number One',
            TypeAsString: 'Phone',
            Required: true,
        },
        {
            InternalName: 'ZipCode1',
            Title: 'Zip Code One',
            TypeAsString: 'Zip'
        },
        { InternalName: 'Body' },
    ],

    Form = ({
        item = {},
        fields,
        mode,
        context
    }) => {

        const methods = useForm(),

            { handleSubmit, errors } = methods,

            onSubmit = data => {
                console.log('%c data', mcc, data);
            },

            elFormFields = fieldsToShow.map(fts => {

                const fieldDef = fields.find((f: any) => f.InternalName == fts.InternalName),
                    fieldType = fts.TypeAsString || fieldDef.TypeAsString;

                return (
                    <>
                        <FormField
                            field={fieldDef}
                            fieldOverrides={fts}
                            label={fts.Title || fieldDef.Title}
                            val={item[fts.InternalName]}
                            mode={mode}
                            horizontal={true}
                            // handler={handlerFields}
                            context={context}
                        />
                        {errors[fts.InternalName] &&
                            <div style={{ color: 'red' }}>
                                {
                                    errors[fts.InternalName].message // specific error message in component
                                    || errorMsgs[errors[fts.InternalName].type][fieldType] // error message from errorMsgs.tsx
                                    || errorMsgs[errors[fts.InternalName].type] // error message from errorMsgs.tsx
                                    || errorMsgs.unknown // unknown error message from errorMsgs.tsx
                                }
                            </div>
                        }
                    </>
                );

            });

        return (
            <FormProvider {...methods} >

                <form onSubmit={handleSubmit(onSubmit)}>

                    {elFormFields}

                    <PrimaryButton type="submit">Go</PrimaryButton>

                </form>

            </FormProvider>
        );
    };

export default Form;