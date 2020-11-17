import * as React from 'react';
import FormField from './FormField';

const mcc = 'background:black;color:orange;';

const fieldsToShow: any = [
    { InternalName: 'Title' }, // can add DisplayName/Title, required, disabled... choices?
    { InternalName: 'Status', Title: 'Status' },
    { InternalName: 'DueDate' },
    { InternalName: 'AssignedTo' },
];

const handlerFields = (field, value) => {
    console.log('%c field', mcc, field);
    console.log('%c value', mcc, value);

}

const Form = ({ item, fields }) => {
    console.log('%c item', mcc, item);
    console.log('%c fields', mcc, fields);

    const elFormFields = fieldsToShow.map(fts => {
        console.log('%c fts', mcc, fts);

        const fieldDef = fields.find((f: any) => f.InternalName == fts.InternalName);
        console.log('%c fieldDef', mcc, fieldDef);

        return (
            <FormField
                label={fts.Title || fieldDef.Title}
                val={item[fts.InternalName]}
                type={fieldDef.TypeAsString}
                field={fieldDef}
                horizontal={true}
                handler={handlerFields}
            />
        );

    });
    console.log('%c elFormFields', mcc, elFormFields);

    return (
        <>{elFormFields}</>
    );
};


export default Form;