import * as React from 'react';
import {
    ComboBox,
    IComboBox,
    IComboBoxOption,
    SelectableOptionMenuItemType,
} from 'office-ui-fabric-react/lib/ComboBox';


const FieldComboBox = (
    field,
    value,
    handler?, // why does this have to be optional
    ref? // why does this have to be optional
) => {
    // const comboBoxRef = React.useRef<IComboBox>(ref);
    // const onOpenClick = React.useCallback(() => comboBoxRef.current?.focus(true), []);

    return (
        <div>
            <ComboBox
                // componentRef={comboBoxRef}
                // defaultSelectedKey="C"
                // label="Basic ComboBox"
                allowFreeform
                autoComplete="on"
                options={field.Choices}
                onChange={handler}
            />
        </div>
    );

};

export default FieldComboBox;