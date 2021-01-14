import * as React from 'react';
import { DatePicker/* , IDatePickerStyles */ } from 'office-ui-fabric-react/lib/DatePicker';
// import * as dayjs from 'dayjs';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'color:magenta;',

    FieldDatePicker = ({
        field,
        dateValue
    }) => {
        const methods = useFormContext(),

            { control } = methods,

            val = dateValue ? new Date(dateValue) : null;

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

export default FieldDatePicker;