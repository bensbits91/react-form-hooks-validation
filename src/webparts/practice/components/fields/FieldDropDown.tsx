import * as React from 'react';
import { Dropdown, IDropdownOption/* , IDropdownStyles */ } from 'office-ui-fabric-react/lib/Dropdown';
// import { unset } from '@microsoft/sp-lodash-subset';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'background:navy;color:aqua;',

    FieldDropDown = ({
        field,
        value,
        mode,
        fieldMinWidth = '200px',
    }) => {
        const methods = useFormContext(),

            { control } = methods,

            options: IDropdownOption[] = field.Choices ?
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
                defaultValue={value && value != 'noselection' ? value.replace(/ /g, '') : null} // do I want key (no spaces) or text (with spaces) for saving data????????
                render={({ onChange, /* onBlur,  */value, name/* , ref */ }) => (
                    <Dropdown
                        id={name}
                        placeholder='Please make a selection'
                        options={options}
                        defaultSelectedKey={value && value != 'noselection' ? value.replace(/ /g, '') : null} // do I want key (no spaces) or text (with spaces) for saving data????????
                        onChange={(e, o) => onChange(o.key)} // do I want key (no spaces) or text (with spaces) for saving data????????




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