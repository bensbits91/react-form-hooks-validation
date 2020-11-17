import * as React from 'react';
import { DatePicker/* , IDatePickerStyles */ } from 'office-ui-fabric-react/lib/DatePicker';
import * as dayjs from 'dayjs';

const mcc = 'color:magenta;';

export interface FieldDatePickerProps {
    field: any;
    value: string;
    // labelOverride?: string;
    handler: any;
    disabled: boolean;
    required?: boolean;
}

export interface FieldDatePickerState {

}

class FieldDatePicker extends React.Component<FieldDatePickerProps, FieldDatePickerState> {
    constructor(props: FieldDatePickerProps) {
        super(props);
        this.state = {};
    }

    // public componentDidMount() {
    //     console.log('%c : FieldDatePicker -> componentDidMount -> this.props', mcc, this.props);
    // }

    public _onChange(f, d) {
        this.props.handler(f.InternalName, d);
    }

    public render() {
        const { field, value, /* labelOverride,  */disabled, required } = this.props;

        // const labelText = labelOverride || field.Title;

        // const label = required
        //     ? labelText + '  *'
        //     : labelText;

        const val = value ? new Date(value) : null;

        return (
            <DatePicker
                // label={label}
                placeholder='Please select a date'
                highlightCurrentMonth
                highlightSelectedMonth
                onSelectDate={d => { this._onChange(field, d); }}
                disabled={disabled}
                // showCloseButton
                // showMonthPickerAsOverlay
                // onRenderLabel={this._onRenderLabel}
                // styles={{ root: {color: 'red'}}}
                // initialPickerDate={moment(field.value).format('ddd MMM DD YYYY')}
                showGoToToday={false}
                value={val}
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
        );
    }
}

export default FieldDatePicker;