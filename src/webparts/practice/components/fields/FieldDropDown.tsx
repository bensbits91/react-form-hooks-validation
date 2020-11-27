import * as React from 'react';
import { Dropdown, IDropdownOption/* , IDropdownStyles */ } from 'office-ui-fabric-react/lib/Dropdown';
import { unset } from '@microsoft/sp-lodash-subset';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'background:navy;color:aqua;';

const FieldDropDown = ({
    field,
    value,
    mode,
    fieldMinWidth = '200px',
}) => {
    const methods = useFormContext();
    const { control } = methods;


    const options: IDropdownOption[] = field.Choices ?
        [
            {
                key: 'noselection',
                text: 'Please make a selection',
            },
            ...field.Choices.map(c => ({ key: c.replace(/ /g, ''), text: c }))
        ] : [
            {
                key: 'noselection',
                text: 'Please make a selection',
            },
        ];

    // const selectedKey = value && value != 'noselection' ? value.replace(/ /g, '') : null;

    // const minWidth = fieldMinWidth || '200px';


    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={value && value != 'noselection' ? value.replace(/ /g, '') : null}
            render={({ onChange, onBlur, value, name, ref }) => (
                <Dropdown
                    id={name}
                    placeholder='Please make a selection'
                    options={options}
                    defaultSelectedKey={value && value != 'noselection' ? value.replace(/ /g, '') : null}
                    onChange={(e, o) => onChange(o.key)}




                // styles={/* disabled ? {
                //     label: {
                //         display: 'inline-block',
                //         verticalAlign: 'middle'
                //     },
                //     dropdown: {
                //         display: 'inline-block',
                //         verticalAlign: 'middle'
                //     },
                //     title: {
                //         backgroundColor: '#fff',
                //         color: 'rgb(50, 49, 48)'
                //     },
                //     caretDownWrapper: {
                //         display: 'none'
                //     }
                // } :  */{
                //         label: {
                //             display: 'inline-block',
                //             verticalAlign: 'middle'
                //         },
                //         dropdown: {
                //             display: 'inline-block',
                //             minWidth: minWidth,
                //             verticalAlign: 'middle',
                //         },

                //     }}
                />
            )}
        />
    );
}


export default FieldDropDown;