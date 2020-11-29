import * as React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import FormField from './FormField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import * as errorMsgs from './errorMsgs';

const mcc = 'background:black;color:orange;';

const fieldsToShow: any = [
    { InternalName: 'Title' }, // can add DisplayName/Title, required, disabled... choices?
    { InternalName: 'Status' },
    { InternalName: 'DueDate' },
    { InternalName: 'AssignedTo' },
    { InternalName: 'TextField1', Title: 'Text Field One' },
    { InternalName: 'ChoiceAsRadio1', Title: 'Radio Buttons One' },
    { InternalName: 'Body' },
];

// const handlerFields = (field, value) => {
//     console.log('%c field', mcc, field);
//     console.log('%c value', mcc, value);
// };

const Form = ({
    item = {},
    fields,
    mode,
    context
}) => {

    const methods = useForm();
    const { handleSubmit, errors } = methods;

    const onSubmit = data => {
        console.log('%c data', mcc, data);
    };


    const elFormFields = fieldsToShow.map(fts => {

        const fieldDef = fields.find((f: any) => f.InternalName == fts.InternalName);

        return (
            <>
                <FormField
                    field={fieldDef}
                    label={fts.Title || fieldDef.Title}
                    val={item[fts.InternalName]}
                    mode={mode}
                    horizontal={true}
                    // handler={handlerFields}
                    context={context}
                />
                {errors[fts.InternalName] &&
                    <div style={{ color: 'red' }}>{errorMsgs[errors[fts.InternalName].type]}</div>
                    // <div style={{ color: 'red' }}>{errors[fts.InternalName].type + ': ' + errors[fts.InternalName].message}</div>
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