import * as React from 'react';
import FormField from './FormField';

const mcc = 'background:black;color:orange;';

const fieldsToShow: any = [
    { InternalName: 'Title' }, // can add DisplayName/Title, required, disabled... choices?
    { InternalName: 'Status', Title: 'Status' },
];

const Form = ({ item, fields }) => {
    console.log('%c item', mcc, item);
    console.log('%c fields', mcc, fields);

    const elFormFields = fieldsToShow.map(fts => {

        const fieldDef = fields.find((f: any) => f.InternalName == fts.InternalName);

        return (
            <FormField
                label={fts.Title || fieldDef.Title}
                val={item[fts.InternalName]}
                type={fieldDef.TypeAsString}
            />
        );

    });
    console.log('%c elFormFields', mcc, elFormFields);

    return (
        <>{elFormFields}</>
    );
};


export default Form;