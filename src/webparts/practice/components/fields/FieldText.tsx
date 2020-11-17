import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const mcc = 'background-color:navy;color:white;';


export interface FieldTextProps {
    field: any;
    value?: any;
    handler: any;
    multiline?: boolean;
    rows?: number;
    cols?: number;
    placeholder?: string;
    label?: boolean;
    labelOverride?: string;
    readOnly?: boolean;
    required?: boolean;
}

export interface FieldTextState {

}

class FieldText extends React.Component<FieldTextProps, FieldTextState> {
    constructor(props: FieldTextProps) {
        super(props);
        this.state = {};
    }

    // public componentDidMount() {
    //     console.log('%c : FieldText -> componentDidMount -> this.props', mcc, this.props);
    // }

    public _onChange(f, o) {
        this.props.handler(f.InternalName, o);
    }

    // private _onRenderLabel = (props/* : ITextFieldProps */)/* : JSX.Element */ => {
    //     return (
    //         <span style={{ color: colors.gray.c }}>{props.label}</span>
    //     );
    // }

    public render() {
        const { field, placeholder, label, labelOverride, readOnly, required, value, multiline, rows, cols } = this.props;
        const placeholder_toShow = placeholder !== null ? placeholder : 'Please enter text here';

        const theLabel = !!label
            ? labelOverride
                ? labelOverride
                : field.Title
            : false;
            
        return (
            <TextField
                id={field.InternalName}
                label={theLabel}
                placeholder={placeholder_toShow}
                defaultValue={value}
                readOnly={readOnly}
                required={required}
                multiline={multiline ? multiline : false}
                rows={/* multiline &&  */rows ? rows : 1}
                cols={/* multiline &&  */cols ? cols : 50}
                styles={readOnly ? {
                    subComponentStyles: {
                        label: {
                            root: {
                                display: 'inline-block',
                                verticalAlign: 'top'
                            }
                        }
                    },
                    fieldGroup: {
                        border: 'none',
                        display: 'inline-block',
                        verticalAlign: 'top'
                    },
                } : {
                        subComponentStyles: {
                            label: {
                                root: {
                                    display: 'inline-block',
                                    verticalAlign: 'middle'
                                }
                            }
                        },
                        fieldGroup: {
                            display: 'inline-block',
                            verticalAlign: 'middle'
                        }
                    }}
                // onRenderLabel={this._onRenderLabel}
                onChange={(e, t) => this._onChange(field, t)}
            />
        );
    }
}

export default FieldText;