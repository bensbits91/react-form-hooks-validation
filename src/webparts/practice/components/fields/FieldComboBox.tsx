import * as React from 'react';
import {
    ComboBox,
    IComboBox,
    IComboBoxOption,
    SelectableOptionMenuItemType,
} from 'office-ui-fabric-react/lib/ComboBox';
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'background:darkgreen';

const FieldComboBox = ({
    field,
    value,
}) => {

    const methods = useFormContext();
    const { control } = methods;

    const options: IComboBoxOption[] = field.Choices.map(f => ({
        key: f.replace(/ /g, ''),
        text: f
    }));
    console.log('%c field', mcc, field);
    console.log('%c options', mcc, options);

    return (
        <div>
            <Controller
                name={field.InternalName}
                control={control}
                defaultValue={value/* .replace(/ /g, '') */} // can't get this to work <<<<<<<<<<<<<<<<<<<<<<<<<<<<
                as={
                    <ComboBox
                        id={field.InternalName}
                        options={options}
                        // componentRef={comboBoxRef}
                        value={value.replace(/ /g, '')} // can't get this to work <<<<<<<<<<<<<<<<<<<<<<<<<<<<
                        allowFreeform
                        autoComplete="on"
                    />
                }
            />
        </div>
    );

};

export default FieldComboBox;