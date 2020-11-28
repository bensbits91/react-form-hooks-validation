import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';



export interface FieldRadioButtonsProps {
    field: any;
    // optionsToHide?: any;
    value: string;
    // handler: any;
    // label?: boolean;
    // labelOverride?: string;
    // disabled?: boolean;
    // required?: boolean;
    mode: string;
}

export interface FieldRadioButtonsState {

}

class FieldRadioButtons extends React.Component<FieldRadioButtonsProps, FieldRadioButtonsState> {
    constructor(props: FieldRadioButtonsProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const { field, /* optionsToHide,  */value/* , labelOverride, disabled, required */ } = this.props;

        // const labelText = labelOverride || field.Title;

        // const label = this.props.label === true || this.props.label === undefined || this.props.label === null
        //     ? required
        //         ? labelText + '  *'
        //         : labelText
        //     : false;

        let realOptions = [];

        // field.Choices.forEach(c => {
        //     if (optionsToHide.includes(c)) {
        //         return;
        //     }
        //     realOptions.push({
        //         key: c.replace(/ /g, ''),
        //         text: c,
        //         styles: {
        //             root: {
        //                 marginTop: 0
        //             },
        //             choiceFieldWrapper: {
        //                 width: 60 // assumes only brief options like yes/no
        //             },
        //         }

        //     });
        // });

        const options: IChoiceGroupOption[] = field.Choices.map(c => ({ key: c.replace(/ /g, ''), text: c }))

        const selectedKey = value && value != 'noselection' ? value.replace(/ /g, '') : null;



        return (
            <ChoiceGroup
                id={field.InternalName}
                // label={label}
                options={options}
                selectedKey={selectedKey}
                // disabled={disabled}
                // onChange={(e, o) => this.props.handler(field.InternalName, o.key, o.text)}
                styles={{
                    root: {
                        display: 'inline-flex'
                    },
                    flexContainer: {
                        display: 'inline-flex'
                    },
                }}
            />
        );
    }
}

export default FieldRadioButtons;