import * as React from 'react';
import { DatePicker/* , IDatePickerStyles */ } from 'office-ui-fabric-react/lib/DatePicker';
import * as dayjs from 'dayjs';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'color:magenta;';

const FieldDatePicker = ({
    field,
    dateValue
}) => {
    console.log('%c field', mcc, field);
    const methods = useFormContext();
    const { control } = methods;

    const val = dateValue ? new Date(dateValue) : null;

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={val}
            render={({ onChange, /* onBlur,  */value, name/* , ref */ }) => (
                <DatePicker
                    id={name}
                    placeholder='Please select a date'
                    initialPickerDate={value}
                    value={value}
                    highlightCurrentMonth
                    highlightSelectedMonth
                    onSelectDate={d => onChange(d)}

                // disabled={disabled || false}
                // showCloseButton
                // showMonthPickerAsOverlay
                // onRenderLabel={this._onRenderLabel}
                // initialPickerDate={moment(field.value).format('ddd MMM DD YYYY')}
                // showGoToToday={false}




                // styles={
                //         label: {
                //                 display: 'inline-block',
                //                 verticalAlign: 'top'
                //     },
                //     fieldGroup: {
                //         border: 'none',
                //         display: 'inline-block',
                //         verticalAlign: 'top'
                //     },

                // }
                />
            )}
        />
    );



};

// export interface FieldDatePickerProps {
//     field: any;
//     value: string;
//     // labelOverride?: string;
//     // handler: any;
//     // disabled?: boolean;
//     // required?: boolean;
// }

// export interface FieldDatePickerState {

// }

// class FieldDatePicker extends React.Component<FieldDatePickerProps, FieldDatePickerState> {
//     constructor(props: FieldDatePickerProps) {
//         super(props);
//         this.state = {};
//     }

// public componentDidMount() {
//     console.log('%c : FieldDatePicker -> componentDidMount -> this.props', mcc, this.props);
// }

// public _onChange(f, d) {
//     this.props.handler(f.InternalName, d);
// }

// public render() {
//     const { field, value, /* labelOverride,  */disabled, required } = this.props;

// const labelText = labelOverride || field.Title;

// const label = required
//     ? labelText + '  *'
//     : labelText;

// const val = value ? new Date(value) : null;

// return (
//     <DatePicker
//         // label={label}
//         placeholder='Please select a date'
//         highlightCurrentMonth
//         highlightSelectedMonth
//         onSelectDate={d => { this._onChange(field, d); }}
//         disabled={disabled || false}
//         // showCloseButton
//         // showMonthPickerAsOverlay
//         // onRenderLabel={this._onRenderLabel}
//         // styles={{ root: {color: 'red'}}}
//         // initialPickerDate={moment(field.value).format('ddd MMM DD YYYY')}
//         showGoToToday={false}
//         value={val}
//     // styles={
//     //         label: {
//     //                 display: 'inline-block',
//     //                 verticalAlign: 'top'
//     //     },
//     //     fieldGroup: {
//     //         border: 'none',
//     //         display: 'inline-block',
//     //         verticalAlign: 'top'
//     //     },

//     // }
//     />
// );
//     }
// }

export default FieldDatePicker;