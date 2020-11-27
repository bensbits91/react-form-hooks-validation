import * as React from 'react';
import { Dropdown, IDropdownOption/* , IDropdownStyles */ } from 'office-ui-fabric-react/lib/Dropdown';
import { unset } from '@microsoft/sp-lodash-subset';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'background:navy;color:aqua;';







// export interface FieldDropDownProps {
//     field: any;
//     // optionsToHide: any;
//     value: string;
//     handler: any;
//     // label?: boolean;
//     // labelOverride?: string;
//     fieldMinWidth?: string;
//     disabled?: boolean;
//     required?: boolean;
// }

// export interface FieldDropDownState { }

// class FieldDropDown extends React.Component<FieldDropDownProps, FieldDropDownState> {
//     constructor(props: FieldDropDownProps) {
//         super(props);
//         this.state = {};
//     }

//     public componentDidMount() {
//         console.log('%c : FieldDropDown -> componentDidMount -> this.props', mcc, this.props);
//     }

//     public render() {
// const { field, /* optionsToHide,  */value, /* labelOverride,  */fieldMinWidth, disabled, required } = this.props;

// const labelText = labelOverride || field.Title;

// const label = this.props.label === true || this.props.label === undefined || this.props.label === null
// ? required
// ? labelText + '  *'
// : labelText
// : false;

// let realOptions = [];

// field.Choices.forEach(c => {
//     if (optionsToHide.includes(c)) {
//         return;
//     }
//     realOptions.push({
//         key: c.replace(/ /g, ''),
//         text: c
//     });
// });

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
                    onChange={(e, o) => onChange(o.key/* , o.text */)}




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