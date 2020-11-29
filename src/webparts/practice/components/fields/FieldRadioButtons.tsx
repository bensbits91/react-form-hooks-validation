import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Controller, useFormContext } from "react-hook-form";


const mcc = 'background:magenta;color:black;';


const FieldRadioButtons = ({
    field,
    value,
    mode,
    horizontal = false,
}) => {
    const methods = useFormContext();
    const { control } = methods;


    const options: IChoiceGroupOption[] = field.Choices.map(c => ({ key: c.replace(/ /g, ''), text: c }))

    // const selectedKey = value /* && value != 'noselection'  */ ? value.replace(/ /g, '') : null;
    // console.log('%c selectedKey', mcc, selectedKey);

    // const [selectedKey, setSelectedKey] = React.useState<string>('B');

    // const onChange = React.useCallback((ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
    //     setSelectedKey(option.key);
    // }, []);

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={value /* && value != 'noselection'  */? value.replace(/ /g, '') : null} // do I want key (no spaces) or text (with spaces) for saving data????????
            render={({ onChange, /* onBlur,  */value, name/* , ref */ }) => (
                <ChoiceGroup
                    id={name}
                    // selectedKey={selectedKey}
                    // disabled={disabled}
                    options={options}
                    defaultSelectedKey={value /* && value != 'noselection'  */? value.replace(/ /g, '') : null} // do I want key (no spaces) or text (with spaces) for saving data????????
                    onChange={(e, o) => onChange(o.key)} // do I want key (no spaces) or text (with spaces) for saving data????????
                    styles={horizontal
                        ? {
                            root: {
                                display: 'inline-flex'
                            },
                            flexContainer: {
                                display: 'inline-flex'
                            },
                        }
                        : {}
                    }
                />
            )}
        />
    );
};

export default FieldRadioButtons;